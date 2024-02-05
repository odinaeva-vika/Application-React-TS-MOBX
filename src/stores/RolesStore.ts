import { makeAutoObservable, runInAction } from "mobx";
import { IRoles } from "../interfaces";
import { getRoles } from "../services/rolesServices";

class RolesStore {
  items?: IRoles[] = [];
  isLoading: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  getRolesAction = async () => {
    try {
      this.isLoading = true;
      const data = await getRoles();

      runInAction(() => {
        this.items = data.items;

        this.isLoading = false;
      });
    } catch (error) {
      this.isLoading = false;
    }
  };
}
export default new RolesStore();
