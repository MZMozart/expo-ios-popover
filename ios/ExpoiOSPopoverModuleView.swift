import ExpoModulesCore
import SwiftUI

// MARK: - Props
class PopoverProps: ExpoSwiftUI.ViewProps {
  @Field var arrowEdge: String?
}

internal final class PopoverTriggerProps: ExpoSwiftUI.ViewProps {
}

internal final class PopoverContentProps: ExpoSwiftUI.ViewProps {
    @Field var width: CGFloat?
    @Field var height: CGFloat?
    @Field var backgroundColor: String?
}

// MARK: - Popover View
struct ExpoPopoverView: ExpoSwiftUI.View, ExpoSwiftUI.WithHostingView {
  @ObservedObject var props: PopoverProps
  @State private var isPresented: Bool = false

  var body: some View {
    if let trigger = props.children?.compactMap({ $0.childView as? ExpoPopoverTriggerView }).first,
       let content = props.children?.compactMap({ $0.childView as? ExpoPopoverContentView }).first {

        if #available(iOS 26.0, *) {
            trigger
                .onTapGesture {
                    isPresented.toggle()
                }
                .popover(
                          isPresented: $isPresented,
                          attachmentAnchor: .rect(.bounds), 
                          arrowEdge: mapArrowEdge(props.arrowEdge)
                      ) {
                          content
                      }
        } else {

        }
    }
  }

  // Map string from JS → SwiftUI edge
  private func mapArrowEdge(_ edge: String?) -> Edge {
    switch edge {
    case "top": return .top
    case "leading": return .leading
    case "trailing": return .trailing
    default: return .bottom
    }
  }
}

// MARK: - Trigger
struct ExpoPopoverTriggerView: ExpoSwiftUI.View {
    @ObservedObject var props: PopoverTriggerProps
  var body: some View {
    Children()
  }
}


// MARK: - Content
struct ExpoPopoverContentView: ExpoSwiftUI.View {
    @ObservedObject var props: PopoverContentProps

    @State private var width: CGFloat = 200
    @State private var height: CGFloat = 200

    var body: some View {
        if #available(iOS 16.4, *) {
            Children()
                .background(GeometryReader { geo in
                    Color.clear
                        .onAppear {
                            updateSize(from: geo.size)
                        }
                        .onChange(of: geo.size) { newSize in
                            updateSize(from: newSize)
                        }
                })
                .presentationCompactAdaptation(.none)
                .presentationBackground(color(from: props.backgroundColor))
                .frame(width: width, height: height)
                .background(color(from: props.backgroundColor))
        } else {
            // Fallback on earlier versions
        }
    }

    private func updateSize(from size: CGSize) {

        if let w = props.width { width = w } else { width = size.width }
        if let h = props.height { height = h } else { height = size.height }
    }
}



func color(from string: String?) -> Color {
    guard let string = string?.trimmingCharacters(in: .whitespacesAndNewlines).lowercased() else {
        return Color.clear
    }
    

    switch string {
    case "black": return Color.black
    case "white": return Color.white
    case "red": return Color.red
    case "green": return Color.green
    case "blue": return Color.blue
    case "yellow": return Color.yellow
    case "orange": return Color.orange
    case "pink": return Color.pink
    case "purple": return Color.purple
    case "gray", "grey": return Color.gray
    default:
        break
    }
    
    // Hex code support
    if string.hasPrefix("#") {
        let hexString = String(string.dropFirst())
        let scanner = Scanner(string: hexString)
        var hexNumber: UInt64 = 0
        
        if scanner.scanHexInt64(&hexNumber) {
            let r, g, b, a: Double
            
            switch hexString.count {
            case 6: // RRGGBB
                r = Double((hexNumber & 0xFF0000) >> 16) / 255
                g = Double((hexNumber & 0x00FF00) >> 8) / 255
                b = Double(hexNumber & 0x0000FF) / 255
                a = 1.0
            case 8: // RRGGBBAA
                r = Double((hexNumber & 0xFF000000) >> 24) / 255
                g = Double((hexNumber & 0x00FF0000) >> 16) / 255
                b = Double((hexNumber & 0x0000FF00) >> 8) / 255
                a = Double(hexNumber & 0x000000FF) / 255
            default:
                return Color.clear // invalid hex length
            }
            
            return Color(red: r, green: g, blue: b, opacity: a)
        } else {
            return Color.clear // invalid hex content
        }
    }
    
    // Fallback
    return Color.clear
}
