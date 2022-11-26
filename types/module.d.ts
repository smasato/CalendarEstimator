import { EstimatePluginInterface } from "~/plugins/estimate";
import { ConstantsPluginInterface } from "~/plugins/constants";
declare module "vue/types/vue" {
  interface Vue {
    $estimate: EstimatePluginInterface;
    $constants: ConstantsPluginInterface;
  }
}
