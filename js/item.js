import { shop,  menu  } from "/js/initialData.js";
import { PrintMenu, printOneProduct, getUrlParams, getAdd } from "/js/function.js";

PrintMenu(menu);
let sku = getUrlParams().get("SKU");
printOneProduct(sku, shop);
getAdd();