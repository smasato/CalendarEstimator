import { CalcPluginInterface } from "~/plugins/calc";
import { ConstantsPluginInterface } from "~/plugins/constants";
declare module "vue/types/vue" {
  interface Vue {
    $calc: CalcPluginInterface;
    $constants: ConstantsPluginInterface;
  }
}
