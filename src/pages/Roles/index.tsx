import { observer } from "mobx-react-lite";
import { FC, useEffect } from "react";
import RolesStore from "../../stores/RolesStore";
import RolesList from "../../widgets/RolesList";

const Roles: FC = observer(() => {
  useEffect(() => {
    RolesStore.getRolesAction();
  }, []);

  return (
    <section>
      <RolesList items={RolesStore.items} isLoading={RolesStore.isLoading} />
    </section>
  );
});

export default Roles;
