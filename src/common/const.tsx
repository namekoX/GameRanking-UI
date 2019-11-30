
export default class Const {
  static MENU_URL = "/menu";
  static MENU_DMM_URL = Const.MENU_URL + "/dmm/";
  static MENU_DMMR18_URL = Const.MENU_URL + "/dmmr18/";
  static MENU_NIJIYOME_URL = Const.MENU_URL + "/nijiyome/";
  static MENU_GOOGLE_PLAY_URL = Const.MENU_URL + "/GooglePlay/";
  static MENU_YAHOO_URL = Const.MENU_URL + "/Yahoo/";
  static BASE_DATE_START:Date = new Date(Date.parse('2019/11/01 00:00:00'));
  static BASE_DATE_END:Date = new Date(Date.parse(new Date().getFullYear() + '/' + (new Date().getMonth() + 1) + '/1 00:00:00'));
  static SITE_ROOT = "/app3";

  static GET_LIST_ENTRY_URL="/phproot/gameRanking/select.php";
}