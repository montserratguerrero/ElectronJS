const json = require("./../assets/values/String.json");

//Name all item of left Menu
$("#button-dashboard").find("em").text(json.section_dashboard.name);
$("#button-config").find("em").text(json.section_config.name);
$("#button-stock").find("em").text(json.section_stock.name);
$("#button-entree").find("em").text(json.section_entrée.name);
$("#button-sortie").find("em").text(json.section_sortie.name);
$("#button-rapport").find("em").text(json.section_rapport.name);
$("#button-aide").find("em").text(json.section_aide.name);
$("#button-apropos").find("em").text(json.section_apropos.name);

//Put ICON to the left Menu
$("#button-dashboard").find("i").addClass(json.section_dashboard.icon);
$("#button-config").find("i").addClass(json.section_config.icon);
$("#button-stock").find("i").addClass(json.section_stock.icon);
$("#button-entree").find("i").addClass(json.section_entrée.icon);
$("#button-sortie").find("i").addClass(json.section_sortie.icon);
$("#button-rapport").find("i").addClass(json.section_rapport.icon);
$("#button-aide").find("i").addClass(json.section_aide.icon);
$("#button-apropos").find("i").addClass(json.section_apropos.icon);

//Show section's title 
$("#dashboard-titre").text(json.name+" - "+json.section_dashboard.name);
$("#config-titre").text(json.name+" - "+json.section_config.name);
$("#stock-titre").text(json.name+" - "+json.section_stock.name);
$("#entree-titre").text(json.name+" - "+json.section_entrée.name);
$("#sortie-titre").text(json.name+" - "+json.section_sortie.name);
$("#rapport-titre").text(json.name+" - "+json.section_rapport.name);
$("#aide-titre").text(json.name+" - "+json.section_aide.name);
$("#apropos-titre").text(json.name+" - "+json.section_apropos.name);

/**
 * CONFIGURATIONS
 */
//Section configuration
//Onglets
$(".nav-link-med").text((json.med.plurial).toUpperCase());
$(".nav-link-forme").text((json.forme.plurial).toUpperCase());
$(".nav-link-cat").text((json.cat.plurial).toUpperCase());
$(".nav-link-frnssr").text((json.fournisseur.plurial).toUpperCase());
$(".nav-link-service").text((json.service.plurial).toUpperCase());

//Tab med
//Header of Table
$(".tab_med thead tr .1").text(json.nbr);
$(".tab_med thead tr .2").text(json.med.designation);
$(".tab_med thead tr .3").text(json.forme.designation);
$(".tab_med thead tr .4").text(json.cat.designation);
$(".tab_med thead tr .5").text(json.med.stock_init);

//Tab forme
$(".tab_forme thead tr .1").text(json.nbr);
$(".tab_forme thead tr .2").text(json.forme.designation);

//Tab cat
$(".tab_cat thead tr .1").text(json.nbr);
$(".tab_cat thead tr .2").text(json.cat.designation);

//Tab fournisseur
$(".tab_frnssr thead tr .1").text(json.nbr);
$(".tab_frnssr thead tr .2").text(json.fournisseur.designation);
$(".tab_frnssr thead tr .3").text(json.fournisseur.phone);
$(".tab_frnssr thead tr .4").text(json.fournisseur.adress);

//Tab service
$(".tab_service thead tr .1").text(json.nbr);
$(".tab_service thead tr .2").text(json.service.designation);

//Modals Med
$(".med-modal-title").text(json.med.add);
$("label.design_med").text(json.med.designation);
$("#SuppMedModal").find("h3 span").text(json.med.del_confirm_msg);
$("#SuppMedModal").find("h4").text(json.med.del);

//Modals forme
$(".forme-modal-title").text(json.forme.add);
$("label.design_forme").text(json.forme.designation);
$("#SuppFormModal").find("h3 span").text(json.forme.del_confirm_msg);
$("#SuppFormModal").find("h4").text(json.forme.del);

//Modals cat
$(".cat-modal-title").text(json.cat.add);
$("label.design_cat").text(json.cat.designation);
$("#SuppCatModal").find("h3 span").text(json.cat.del_confirm_msg);
$("#SuppCatModal").find("h4").text(json.cat.del);

//Modals upload
$("#UploadMedModal").find("h4").text(json.med.upload);
$("#UploadMedModal").find(".btn-2").text(json.buttons.upload.name);
$("#submit_med span").text(json.buttons.valid.name);
$("#submit_med").find("i").addClass(json.buttons.valid.icon);

//Modals fournisseur
$(".frnssr-modal-title").text(json.fournisseur.add);
$("label.design_frnssr").text(json.fournisseur.designation);
$("#SuppFrnssrModal").find("h3 span").text(json.fournisseur.del_confirm_msg);
$("#SuppFrnssrModal").find("h4").text(json.fournisseur.del);

//Modals service
$(".service-modal-title").text(json.service.add);
$("label.design_service").text(json.service.designation);
$("#SuppServiceModal").find("h3 span").text(json.service.del_confirm_msg);
$("#SuppServiceModal").find("h4").text(json.service.del);

//Med
$("#save_med span").text(json.buttons.add.name);
$("#save_med").find("i").addClass(json.buttons.add.icon);
$("#update_med span").text(json.buttons.edit.name);
$("#update_med").find("i").addClass(json.buttons.edit.icon);
$("#supp_med span").text(json.buttons.del.name);
$("#supp_med").find("i").addClass(json.buttons.del.icon);

//Forme
$("#save_forme span").text(json.buttons.add.name);
$("#save_forme").find("i").addClass(json.buttons.add.icon);
$("#update_forme span").text(json.buttons.edit.name);
$("#update_forme").find("i").addClass(json.buttons.edit.icon);
$("#supp_forme span").text(json.buttons.del.name);
$("#supp_forme").find("i").addClass(json.buttons.del.icon);

//Cat
$("#save_cat span").text(json.buttons.add.name);
$("#save_cat").find("i").addClass(json.buttons.add.icon);
$("#update_cat span").text(json.buttons.edit.name);
$("#update_cat").find("i").addClass(json.buttons.edit.icon);
$("#supp_cat span").text(json.buttons.del.name);
$("#supp_cat").find("i").addClass(json.buttons.del.icon);

//FOURNISSEUR
$("#save_frnssr span").text(json.buttons.add.name);
$("#save_frnssr").find("i").addClass(json.buttons.add.icon);
$("#update_frnssr span").text(json.buttons.edit.name);
$("#update_frnssr").find("i").addClass(json.buttons.edit.icon);
$("#supp_frnssr span").text(json.buttons.del.name);
$("#supp_frnssr").find("i").addClass(json.buttons.del.icon);

//service
$("#save_service span").text(json.buttons.add.name);
$("#save_service").find("i").addClass(json.buttons.add.icon);
$("#update_service span").text(json.buttons.edit.name);
$("#update_service").find("i").addClass(json.buttons.edit.icon);
$("#supp_service span").text(json.buttons.del.name);
$("#supp_service").find("i").addClass(json.buttons.del.icon);
/**
 * ENTREES
 */
//Modals Entree
$(".entree-modal-title").text(json.entree.add);
$("label.design_entree").text(json.entree.quantité);
$("#SuppEntreeModal").find("h3 .confirm_msg_entree").text(json.entree.del_confirm_msg);
$("#SuppEntreeModal").find("h4").text(json.entree.del);

$("#save_entree span").text(json.buttons.add.name);
$("#save_entree").find("i").addClass(json.buttons.add.icon);
$("#update_entree span").text(json.buttons.edit.name);
$("#update_entree").find("i").addClass(json.buttons.edit.icon);
$("#supp_entree span").text(json.buttons.del.name);
$("#supp_entree").find("i").addClass(json.buttons.del.icon);

//Tab entree
$(".tab_entree thead tr .1").text(json.nbr);
$(".tab_entree thead tr .2").text(json.med.designation);
$(".tab_entree thead tr .3").text(json.entree.quantité);
$(".tab_entree thead tr .4").text(json.entree.date);

//Put TITRE et SOUS TITRE to sections ENTREE
$(".card-entree").find("h4").text(json.section_entrée.name);
$(".card-entree").find("p").text(json.section_entrée.sous_titre);

//Delete
$(".date_entree_titre").text(json.entree.date);
$(".qt_titre").text(json.entree.quantité);

/**
 * SORTIE
 */
//Modals sortie
$(".sortie-modal-title").text(json.sortie.add);
$("label.design_sortie").text(json.sortie.quantité);
$("#SuppSortieModal").find("h3 .confirm_msg_sortie").text(json.sortie.del_confirm_msg);
$("#SuppSortieModal").find("h4").text(json.sortie.del);

$("#save_sortie span").text(json.buttons.add.name);
$("#save_sortie").find("i").addClass(json.buttons.add.icon);
$("#update_sortie span").text(json.buttons.edit.name);
$("#update_sortie").find("i").addClass(json.buttons.edit.icon);
$("#supp_sortie span").text(json.buttons.del.name);
$("#supp_sortie").find("i").addClass(json.buttons.del.icon);

//Tab sortie
$(".tab_sortie thead tr .1").text(json.nbr);
$(".tab_sortie thead tr .2").text(json.med.designation);
$(".tab_sortie thead tr .3").text(json.sortie.quantité);
$(".tab_sortie thead tr .4").text(json.sortie.date);

//Put TITRE et SOUS TITRE to sections ENTREE
$(".card-sortie").find("h4").text(json.section_sortie.name);
$(".card-sortie").find("p").text(json.section_sortie.sous_titre);

//Delete
$(".date_sortie_titre").text(json.sortie.date);
$(".qt_titre_sortie").text(json.sortie.quantité);
/**
 * STOCK
 */
//Put TITRE et SOUS TITRE to sections STOCK
$(".card-stock").find("h4").text(json.section_stock.name);
$(".card-stock").find("p").text(json.section_stock.sous_titre);

//Tab Stock
$(".tab_stock thead tr .1").text(json.nbr);
$(".tab_stock thead tr .2").text(json.med.designation);
$(".tab_stock thead tr .3").text(json.stock.name);
$(".tab_stock thead tr .4").text(json.stock.date);