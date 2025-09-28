import { ControllerRegister } from "./controller.register";
import { RepositoryRegister } from "./repository.register";
import { ServiceRegister } from "./service.register";

export class RegiserDI {
  static register() {
    RepositoryRegister.registerRepositories();
    ServiceRegister.registerServices();
    ControllerRegister.registerControllers();
  }
}
