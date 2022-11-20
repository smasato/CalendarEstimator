import { CalcPluginInterface } from "~/plugins/calc";

declare module "vue/types/vue" {
  interface Vue {
    $calc: CalcPluginInterface;
  }
}
