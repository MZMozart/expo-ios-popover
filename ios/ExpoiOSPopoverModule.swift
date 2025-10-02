import ExpoModulesCore

public class ExpoiOSPopoverModule: Module {
  public func definition() -> ModuleDefinition {
    
    Name("ExpoiOSPopoverModule")

      View(ExpoPopoverView.self)
      View(ExpoPopoverTriggerView.self)
      View(ExpoPopoverContentView.self)
  }
}
