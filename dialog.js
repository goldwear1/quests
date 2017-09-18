var hex = require(__dirname+"/../module/hex.js");
var dialogModule = new require(__dirname+"/../module/dialog.js");
var Dialog = new dialogModule();

global.redirectToDialog = function(socket, id, hash, dialogNum, param1) {
	if (param1 != null) {
		var packet = Buffer.alloc(220);
		hex.reverse(hex.intToBuffer(id)).copy(packet,6,0,4);
		hex.reverse(hex.intToBuffer(hash)).copy(packet,10,0,4);
		hex.reverse(hex.intToBuffer(dialogNum)).copy(packet,14,0,4);
		hex.text2hex_ascii(param1).copy(packet,18,0,12);
		sendPacket(socket, packet, 5903, false);
	} else {
		var packet = Buffer.alloc(18);
		hex.reverse(hex.intToBuffer(id)).copy(packet,6,0,4);
		hex.reverse(hex.intToBuffer(hash)).copy(packet,10,0,4);
		hex.reverse(hex.intToBuffer(dialogNum)).copy(packet,14,0,4);
		sendPacket(socket, packet, 5902, false);
	}
}

exports.dialog_337_32_0 = function(socket, id, hash) { //Стакс
	redirectToDialog(socket, id, hash, 0);
}





//===========================================Деревня Эшборн=============================================

exports.dialog_157_32_0 = function(socket, id, hash) { //<Оружейник>/nБэрри
	redirectToDialog(socket, id, hash, 0, socket.session.actor.nickname);
}

exports.dialog_157_2_1 = function(socket, id, hash, callback) { //<Оружейник>/nБэрри
	callback(0);
}

exports.dialog_157_76_2 = function(socket, id, hash, callback) { //<Оружейник>/nБэрри
	callback(5);
}

exports.dialog_157_77_1 = function(socket, id, hash) { //<Оружейник>/nБэрри
	var item = {
		identify: 1,
		item_view: 1,
		amount: 100000,
		item_id: 783 //Стальная стрела
	}
	addItemToInventory(socket, 5151, genBinaryItem(item, socket.session.actor.id), 5, hash)
}

exports.dialog_157_78_1 = function(socket, id, hash) { //<Оружейник>/nБэрри
	var item = {
		identify: 1,
		item_view: 1,
		amount: 100000,
		item_id: 2827 //Красный камень души
	}
	addItemToInventory(socket, 5151, genBinaryItem(item, socket.session.actor.id), 5, hash)
}

exports.dialog_134_32_0 = function(socket, id, hash) { //<Алхимик>/nШарлин
	redirectToDialog(socket, id, hash, 0, socket.session.actor.nickname);
}

exports.dialog_134_1_1 = function(socket, id, hash, callback) { //<Алхимик>/nШарлин
	callback(0);
}

exports.dialog_134_76_2 = function(socket, id, hash, callback) { //<Алхимик>/nШарлин
	callback(5);
}

exports.dialog_162_32_0 = function(socket, id, hash) { //Ювелир Сэм
	redirectToDialog(socket, id, hash, 0, socket.session.actor.nickname);
}

exports.dialog_162_19_2 = function(socket, id, hash, callback) { //Ювелир Сэм
	callback(5);
}

exports.dialog_162_20_0 = function(socket, id, hash) { //Ювелир Сэм
	redirectToDialog(socket, id, hash, 10, socket.session.actor.nickname);
}

exports.dialog_162_2_0 = function(socket, id, hash) { //Особые сферы
	Dialog.changeItemsToItems(socket, [{item_id:922,amount:1},{item_id:409,amount:50}], [{item_id:918,amount:10,item_view:1}], id, hash, 12, 13, 14);
}

exports.dialog_162_3_0 = function(socket, id, hash) { //Особые сферы
	Dialog.changeItemsToItems(socket, [{item_id:922,amount:1},{item_id:409,amount:50}], [{item_id:919,amount:5,item_view:1}], id, hash, 12, 13, 14);
}

exports.dialog_162_4_0 = function(socket, id, hash) { //Особые сферы
	Dialog.changeItemsToItems(socket, [{item_id:922,amount:1},{item_id:409,amount:50}], [{item_id:920,amount:3,item_view:1}], id, hash, 12, 13, 14);
}

exports.dialog_934_32_0 = function(socket, id, hash) { //<Продавец книг умений>/nКен
	redirectToDialog(socket, id, hash, 0, socket.session.actor.nickname);
}

exports.dialog_934_52_1 = function(socket, id, hash, callback) { //<Продавец книг умений>/nКен
	callback(0);
}

exports.dialog_934_76_2 = function(socket, id, hash, callback) { //<Продавец книг умений>/nКен
	callback(5);
}

exports.dialog_933_32_0 = function(socket, id, hash) { //<Продавец Материалов>/nЛютор
	redirectToDialog(socket, id, hash, 0, socket.session.actor.nickname);
}

exports.dialog_933_53_1 = function(socket, id, hash, callback) { //<Продавец Материалов>/nЛютор
	callback(0);
}

exports.dialog_933_76_2 = function(socket, id, hash, callback) { //<Продавец Материалов>/nЛютор
	callback(5);
}

exports.dialog_926_32_0 = function(socket, id, hash) { //<Магазин новичков>/nСид
	redirectToDialog(socket, id, hash, 0, socket.session.actor.nickname);
}

exports.dialog_926_13_1 = function(socket, id, hash, callback) { //<Магазин новичков>/nСид
	callback(0);
}

exports.dialog_926_76_2 = function(socket, id, hash, callback) { //<Магазин новичков>/nСид
	callback(5);
}
exports.dialog_926_77_1 = function(socket, id, hash) { //<Магазин новичков>/nСид
	var item = {
		identify: 1,
		item_view: 1,
		amount: 50,
		item_id: 865 //Зелье здоровья новичка
	}
	addItemToInventory(socket, 5151, genBinaryItem(item, socket.session.actor.id), 5, hash)
}
exports.dialog_167_32_0 = function(socket, id, hash) { //Пофо
	redirectToDialog(socket, id, hash, 0);
}

exports.dialog_167_0_4 = function(socket, id, hash, callback) { //Пофо
	callback(4, 1);
}

exports.dialog_167_0_5 = function(socket, id, hash, callback) { //Пофо
	callback(4, 2);
}

exports.dialog_936_32_0 = function(socket, id, hash) { //Пофо
	redirectToDialog(socket, id, hash, 0);
}

exports.dialog_936_0_4 = function(socket, id, hash, callback) { //Пофо
	callback(4, 1);
}

exports.dialog_936_0_5 = function(socket, id, hash, callback) { //Пофо
	callback(4, 2);
}

exports.dialog_935_32_0 = function(socket, id, hash) { //Эносс
	redirectToDialog(socket, id, hash, 0);
}

exports.dialog_935_0_4 = function(socket, id, hash, callback) { //Эносс
	callback(4, 1);
}

exports.dialog_935_0_5 = function(socket, id, hash, callback) { //Эносс
	callback(4, 2);
}

exports.dialog_243_32_0 = function(socket, id, hash) { //Особые сферы
	redirectToDialog(socket, id, hash, 0, socket.session.actor.nickname);
}

exports.dialog_243_1234_0 = function(socket, id, hash) { //Особые сферы
	redirectToDialog(socket, id, hash, 4, socket.session.actor.nickname);
}

exports.dialog_243_11_0 = function(socket, id, hash) { //Особые сферы
	Dialog.changeItemsToItems(socket, [{item_id:40606,amount:1},{item_id:5572,amount:1}], [{item_id:40607,amount:1,time_off: Math.ceil(new Date().getTime()/1000) + 86400,item_view:1}], id, hash, 98, 2, 3);
}

exports.dialog_243_111_0 = function(socket, id, hash) { //Особые сферы
	Dialog.changeItemsToItems(socket, [{item_id:40616,amount:1},{item_id:5572,amount:1}], [{item_id:40617,amount:1,time_off: Math.ceil(new Date().getTime()/1000) + 259200,item_view:1}], id, hash, 98, 2, 3);
}

exports.dialog_243_1111_0 = function(socket, id, hash) { //Особые сферы
	Dialog.changeItemsToItems(socket, [{item_id:40619,amount:1},{item_id:5572,amount:1}], [{item_id:40620,amount:1,time_off: Math.ceil(new Date().getTime()/1000) + 604800,item_view:1}], id, hash, 98, 2, 3);
}

exports.dialog_243_12_0 = function(socket, id, hash) { //Особые сферы
	Dialog.changeItemsToItems(socket, [{item_id:40606,amount:1},{item_id:5572,amount:1}], [{item_id:40608,amount:1,time_off: Math.ceil(new Date().getTime()/1000) + 86400,item_view:1}], id, hash, 98, 2, 3);
}

exports.dialog_243_122_0 = function(socket, id, hash) { //Особые сферы
	Dialog.changeItemsToItems(socket, [{item_id:40616,amount:1},{item_id:5572,amount:1}], [{item_id:40618,amount:1,time_off: Math.ceil(new Date().getTime()/1000) + 259200,item_view:1}], id, hash, 98, 2, 3);
}

exports.dialog_243_1222_0 = function(socket, id, hash) { //Особые сферы
	Dialog.changeItemsToItems(socket, [{item_id:40619,amount:1},{item_id:5572,amount:1}], [{item_id:40621,amount:1,time_off: Math.ceil(new Date().getTime()/1000) + 604800,item_view:1}], id, hash, 98, 2, 3);
}

exports.dialog_243_13_0 = function(socket, id, hash) { //Особые сферы
	Dialog.changeItemsToItems(socket, [{item_id:40607,amount:1},{item_id:5572,amount:1}], [{item_id:40606,amount:1,time_off: Math.ceil(new Date().getTime()/1000) + 86400,item_view:1}], id, hash, 98, 2, 3);
}

exports.dialog_243_133_0 = function(socket, id, hash) { //Особые сферы
	Dialog.changeItemsToItems(socket, [{item_id:40617,amount:1},{item_id:5572,amount:1}], [{item_id:40616,amount:1,time_off: Math.ceil(new Date().getTime()/1000) + 259200,item_view:1}], id, hash, 98, 2, 3);
}

exports.dialog_243_1333_0 = function(socket, id, hash) { //Особые сферы
	Dialog.changeItemsToItems(socket, [{item_id:40620,amount:1},{item_id:5572,amount:1}], [{item_id:40619,amount:1,time_off: Math.ceil(new Date().getTime()/1000) + 604800,item_view:1}], id, hash, 98, 2, 3);
}

exports.dialog_243_14_0 = function(socket, id, hash) { //Особые сферы
	Dialog.changeItemsToItems(socket, [{item_id:40607,amount:1},{item_id:5572,amount:1}], [{item_id:40608,amount:1,time_off: Math.ceil(new Date().getTime()/1000) + 86400,item_view:1}], id, hash, 98, 2, 3);
}

exports.dialog_243_144_0 = function(socket, id, hash) { //Особые сферы
	Dialog.changeItemsToItems(socket, [{item_id:40617,amount:1},{item_id:5572,amount:1}], [{item_id:40618,amount:1,time_off: Math.ceil(new Date().getTime()/1000) + 259200,item_view:1}], id, hash, 98, 2, 3);
}

exports.dialog_243_1444_0 = function(socket, id, hash) { //Особые сферы
	Dialog.changeItemsToItems(socket, [{item_id:40620,amount:1},{item_id:5572,amount:1}], [{item_id:40621,amount:1,time_off: Math.ceil(new Date().getTime()/1000) + 604800,item_view:1}], id, hash, 98, 2, 3);
}

exports.dialog_243_15_0 = function(socket, id, hash) { //Особые сферы
	Dialog.changeItemsToItems(socket, [{item_id:40608,amount:1},{item_id:5572,amount:1}], [{item_id:40606,amount:1,time_off: Math.ceil(new Date().getTime()/1000) + 86400,item_view:1}], id, hash, 98, 2, 3);
}

exports.dialog_243_155_0 = function(socket, id, hash) { //Особые сферы
	Dialog.changeItemsToItems(socket, [{item_id:40618,amount:1},{item_id:5572,amount:1}], [{item_id:40616,amount:1,time_off: Math.ceil(new Date().getTime()/1000) + 259200,item_view:1}], id, hash, 98, 2, 3);
}

exports.dialog_243_1555_0 = function(socket, id, hash) { //Особые сферы
	Dialog.changeItemsToItems(socket, [{item_id:40621,amount:1},{item_id:5572,amount:1}], [{item_id:40619,amount:1,time_off: Math.ceil(new Date().getTime()/1000) + 604800,item_view:1}], id, hash, 98, 2, 3);
}

exports.dialog_243_16_0 = function(socket, id, hash) { //Особые сферы
	Dialog.changeItemsToItems(socket, [{item_id:40608,amount:1},{item_id:5572,amount:1}], [{item_id:40607,amount:1,time_off: Math.ceil(new Date().getTime()/1000) + 86400,item_view:1}], id, hash, 98, 2, 3);
}

exports.dialog_243_166_0 = function(socket, id, hash) { //Особые сферы
	Dialog.changeItemsToItems(socket, [{item_id:40618,amount:1},{item_id:5572,amount:1}], [{item_id:40617,amount:1,time_off: Math.ceil(new Date().getTime()/1000) + 259200,item_view:1}], id, hash, 98, 2, 3);
}

exports.dialog_243_1666_0 = function(socket, id, hash) { //Особые сферы
	Dialog.changeItemsToItems(socket, [{item_id:40621,amount:1},{item_id:5572,amount:1}], [{item_id:40620,amount:1,time_off: Math.ceil(new Date().getTime()/1000) + 604800,item_view:1}], id, hash, 98, 2, 3);
}

exports.dialog_945_11_0 = function(socket, id, hash) { //Особые сферы
	Dialog.changeItemsToItems(socket, [{item_id:40000,amount:1}], [{item_id:40120,amount:1,item_view:1}], id, hash, 98, 2, 3);
}

exports.dialog_945_12_0 = function(socket, id, hash) { //Особые сферы
	Dialog.changeItemsToItems(socket, [{item_id:40120,amount:1}], [{item_id:40000,amount:1,item_view:1}], id, hash, 98, 2, 3);
}

exports.dialog_945_21_0 = function(socket, id, hash) { //Особые сферы
	Dialog.changeItemsToItems(socket, [{item_id:40000,amount:1}], [{item_id:40120,amount:1,item_view:1},{item_id:40120,amount:1,item_view:1},{item_id:40120,amount:1,item_view:1},{item_id:40120,amount:1,item_view:1},{item_id:40120,amount:1,item_view:1},{item_id:40120,amount:1,item_view:1},{item_id:40120,amount:1,item_view:1},{item_id:40120,amount:1,item_view:1},{item_id:40120,amount:1,item_view:1},{item_id:40120,amount:1,item_view:1}], id, hash, 98, 2, 3, 10);
}

exports.dialog_945_22_0 = function(socket, id, hash) { //Особые сферы
	Dialog.changeItemsToItems(socket, [{item_id:40120,amount:1}], [{item_id:40000,amount:1,item_view:1},{item_id:40000,amount:1,item_view:1},{item_id:40000,amount:1,item_view:1},{item_id:40000,amount:1,item_view:1},{item_id:40000,amount:1,item_view:1},{item_id:40000,amount:1,item_view:1},{item_id:40000,amount:1,item_view:1},{item_id:40000,amount:1,item_view:1},{item_id:40000,amount:1,item_view:1},{item_id:40000,amount:1,item_view:1}], id, hash, 98, 2, 3, 10);
}

exports.dialog_945_13_0 = function(socket, id, hash) { //Особые сферы
	Dialog.changeItemsToItems(socket, [{item_id:40000,amount:1}], [{item_id:40240,amount:1,item_view:1}], id, hash, 98, 2, 3, 10);
}

exports.dialog_945_14_0 = function(socket, id, hash) { //Особые сферы
	Dialog.changeItemsToItems(socket, [{item_id:40000,amount:1}], [{item_id:40360,amount:1,item_view:1}], id, hash, 98, 2, 3, 10);
}

exports.dialog_945_15_0 = function(socket, id, hash) { //Особые сферы
	Dialog.changeItemsToItems(socket, [{item_id:40000,amount:1}], [{item_id:40480,amount:1,item_view:1}], id, hash, 98, 2, 3, 5);
}

exports.dialog_243_3_0 = function(socket, id, hash, callback) { //Особые сферы
	Dialog.changeItemsToBox(socket, [{item_id:40609,amount:2}], 5, id, hash, [98], 2, 10);
}

exports.dialog_243_4_0 = function(socket, id, hash, callback) { //Особые сферы
	Dialog.changeItemsToBox(socket, [{item_id:239,amount:1}], 6, id, hash, [98], 2, 10);
}

exports.dialog_243_5_0 = function(socket, id, hash, callback) { //Особые сферы
	Dialog.changeItemsToBox(socket, [{item_id:240,amount:1}], 7, id, hash, [98], 2, 10);
}

exports.dialog_243_6_0 = function(socket, id, hash, callback) { //Особые сферы
	Dialog.changeItemsToBox(socket, [{item_id:241,amount:1}], 8, id, hash, [98], 2, 10);
}

exports.dialog_945_32_0 = function(socket, id, hash) { //Сферы
	redirectToDialog(socket, id, hash, 0, socket.session.actor.nickname);
}

exports.dialog_945_1_0 = function(socket, id, hash) { //Сферы
	Dialog.openSpheres(socket, 1, id, hash);
}

exports.dialog_945_2_0 = function(socket, id, hash) { //Сферы
	Dialog.openSpheres(socket, 10, id, hash);
}

exports.dialog_945_3_0 = function(socket, id, hash) { //Сферы
	Dialog.openSpheres(socket, 50, id, hash);
}

exports.dialog_945_6_0 = function(socket, id, hash) { //Cферы
	Dialog.changeItemsToItems(socket, [{item_id:5608,amount:3}], [{item_id:40610,amount:1,item_view:2}], id, hash, 82, 2, 3);
}

exports.dialog_929_32_0 = function(socket, id, hash) { //Офнер
	redirectToDialog(socket, id, hash, 0);
}

exports.dialog_929_2_0 = function(socket, id, hash) { //Офнер
	Dialog.openGoldChestWithNormalKey(socket, id, hash);
}

exports.dialog_609_32_0 = function(socket, id, hash) { //<Мастер перемещений>/nМэри
	redirectToDialog(socket, id, hash, 0, socket.session.actor.nickname);
}

exports.dialog_609_1_0 = function(socket, id, hash, callback) { //<Мастер перемещений>/nМэри
	callback(2, {"x": 215548,"y": 11588, "z": 237111, "price": 50});
}

exports.dialog_609_2_0 = function(socket, id, hash, callback) { //<Мастер перемещений>/nМэри
	callback(2, {"x": 417428,"y": 19685, "z": 150344, "price": 60});
}

exports.dialog_609_9_0 = function(socket, id, hash, callback) { //<Мастер перемещений>/nМэри
	callback(2, {"x": 192858,"y": 23794, "z": 106895, "price": 120});
}

exports.dialog_609_3_0 = function(socket, id, hash, callback) { //<Мастер перемещений>/nМэри
	callback(2, {"x": 316007,"y": 12372, "z": 262016, "price": 100});
}

exports.dialog_609_4_0 = function(socket, id, hash, callback) { //<Мастер перемещений>/nМэри
	callback(2, {"x": 459635,"y": 20063, "z": 303229, "price": 100});
}

exports.dialog_609_7_0 = function(socket, id, hash, callback) { //<Мастер перемещений>/nМэри
	callback(2, {"x": 263552,"y": 20285, "z": 224171, "price": 40});
}

exports.dialog_609_8_0 = function(socket, id, hash, callback) { //<Мастер перемещений>/nМэри
	callback(2, {"x": 381172,"y": 16579, "z": 306558});
}

exports.dialog_609_11_0 = function(socket, id, hash, callback) { //<Мастер перемещений>/nМэри
	if (socket.session.actor.class != 2 && socket.session.actor.class != 4) {
		redirectToDialog(socket, id, hash, 99, socket.session.actor.nickname);
		return;
	}
	callback(2, {"x": 803134,"y": 17383, "z": 715812, "price": 200});
}

exports.dialog_2039_32_0 = function(socket, id, hash) { //<Мастер перемещений>/nМэри
	redirectToDialog(socket, id, hash, 0, socket.session.actor.nickname);
}

exports.dialog_2039_1_0 = function(socket, id, hash, callback) { //<Мастер перемещений>/nМэри
	callback(2, {"x": 215548,"y": 11588, "z": 237111, "price": 50});
}

exports.dialog_2039_2_0 = function(socket, id, hash, callback) { //<Мастер перемещений>/nМэри
	callback(2, {"x": 417428,"y": 19685, "z": 150344, "price": 60});
}

exports.dialog_2039_9_0 = function(socket, id, hash, callback) { //<Мастер перемещений>/nМэри
	callback(2, {"x": 192858,"y": 23794, "z": 106895, "price": 120});
}

exports.dialog_2039_3_0 = function(socket, id, hash, callback) { //<Мастер перемещений>/nМэри
	callback(2, {"x": 316007,"y": 12372, "z": 262016, "price": 100});
}

exports.dialog_2039_4_0 = function(socket, id, hash, callback) { //<Мастер перемещений>/nМэри
	callback(2, {"x": 459635,"y": 20063, "z": 303229, "price": 100});
}

exports.dialog_2039_7_0 = function(socket, id, hash, callback) { //<Мастер перемещений>/nМэри
	callback(2, {"x": 263552,"y": 20285, "z": 224171, "price": 40});
}

exports.dialog_2039_8_0 = function(socket, id, hash, callback) { //<Мастер перемещений>/nМэри
	callback(2, {"x": 356104,"y": 15610, "z": 291129});
}


exports.dialog_2057_32_0 = function(socket, id, hash) { //<Привратник>/nХранитель Храма Метеоса
	redirectToDialog(socket, id, hash, 0, socket.session.actor.nickname);
}

exports.dialog_2057_1_0 = function(socket, id, hash, callback) { //<Привратник>/nХранитель Храма Метеоса
	callback(2, {"x": 262560,"y": 11300, "z": 540713, "price": 10000});
}


exports.dialog_161_32_0 = function(socket, id, hash) { //Уоррел
	redirectToDialog(socket, id, hash, 0, socket.session.actor.nickname);
}

exports.dialog_161_1_0 = function(socket, id, hash, callback) { //Уоррел
	Dialog.changeItemsToBox(socket, [{item_id:813,amount:1},{item_id:409,amount:10}], 3, id, hash, [91,92], 81, 5)
}


//===========================================Деревня изгнанников=============================================

exports.dialog_283_32_0 = function(socket, id, hash) { //<Оружейник>/nРубен
	redirectToDialog(socket, id, hash, 0, socket.session.actor.nickname);
}

exports.dialog_283_2_1 = function(socket, id, hash, callback) { //<Оружейник>/nРубен
	callback(0);
}

exports.dialog_283_76_2 = function(socket, id, hash, callback) { //<Оружейник>/nРубен
	callback(5);
}

exports.dialog_283_77_1 = function(socket, id, hash) { //<Оружейник>/nРубен
	var item = {
		identify: 1,
		item_view: 1,
		amount: 100000,
		item_id: 783 //Стальная стрела
	}
	addItemToInventory(socket, 5151, genBinaryItem(item, socket.session.actor.id), 5, hash)
}

exports.dialog_283_78_1 = function(socket, id, hash) { //<Оружейник>/nРубен
	var item = {
		identify: 1,
		item_view: 1,
		amount: 100000,
		item_id: 2827 //Красный камень души
	}
	addItemToInventory(socket, 5151, genBinaryItem(item, socket.session.actor.id), 5, hash)
}

exports.dialog_304_32_0 = function(socket, id, hash) { //<Алхимик>/nЛюси
	redirectToDialog(socket, id, hash, 0, socket.session.actor.nickname);
}

exports.dialog_304_1_1 = function(socket, id, hash, callback) { //<Алхимик>/nЛюси
	callback(0);
}

exports.dialog_304_76_2 = function(socket, id, hash, callback) { //<Алхимик>/nЛюси
	callback(5);
}

exports.dialog_307_32_0 = function(socket, id, hash) { //<Торговец ядами>/nДжек
	redirectToDialog(socket, id, hash, 0, socket.session.actor.nickname);
}

exports.dialog_307_20_1 = function(socket, id, hash, callback) { //<Торговец ядами>/nДжек
	callback(0);
}


//===========================================Деревня Черные земли=============================================

exports.dialog_368_32_0 = function(socket, id, hash) { //<Оружейник>/nКайл
	redirectToDialog(socket, id, hash, 0, socket.session.actor.nickname);
}

exports.dialog_368_2_1 = function(socket, id, hash, callback) { //<Оружейник>/nКайл
	callback(0);
}

exports.dialog_368_76_2 = function(socket, id, hash, callback) { //<Оружейник>/nКайл
	callback(5);
}

exports.dialog_368_77_1 = function(socket, id, hash) { //<Оружейник>/nКайл
	var item = {
		identify: 1,
		item_view: 1,
		amount: 100000,
		item_id: 783 //Стальная стрела
	}
	addItemToInventory(socket, 5151, genBinaryItem(item, socket.session.actor.id), 5, hash)
}

exports.dialog_368_78_1 = function(socket, id, hash) { //<Оружейник>/nКайл
	var item = {
		identify: 1,
		item_view: 1,
		amount: 100000,
		item_id: 2827 //Красный камень души
	}
	addItemToInventory(socket, 5151, genBinaryItem(item, socket.session.actor.id), 5, hash)
}

exports.dialog_366_32_0 = function(socket, id, hash) { //<Алхимик>/nКорнелия
	redirectToDialog(socket, id, hash, 0, socket.session.actor.nickname);
}

exports.dialog_366_1_1 = function(socket, id, hash, callback) { //<Алхимик>/nКорнелия
	callback(0);
}

exports.dialog_366_76_2 = function(socket, id, hash, callback) { //<Алхимик>/nКорнелия
	callback(5);
}

exports.dialog_927_32_0 = function(socket, id, hash) { //<Магазин новичков>/nХейкен
	redirectToDialog(socket, id, hash, 0, socket.session.actor.nickname);
}

exports.dialog_927_13_1 = function(socket, id, hash, callback) { //<Магазин новичков>/nХейкен
	callback(0);
}

exports.dialog_927_76_2 = function(socket, id, hash, callback) { //<Магазин новичков>/nХейкен
	callback(5);
}
exports.dialog_927_77_1 = function(socket, id, hash) { //<Магазин новичков>/nХейкен
	var item = {
		identify: 1,
		item_view: 1,
		amount: 50,
		item_id: 865 //Зелье здоровья новичка
	}
	addItemToInventory(socket, 5151, genBinaryItem(item, socket.session.actor.id), 5, hash)
}

exports.dialog_287_32_0 = function(socket, id, hash) { //Том
	redirectToDialog(socket, id, hash, 0);
}

exports.dialog_287_0_4 = function(socket, id, hash, callback) { //Том
	callback(4, 1);
}

exports.dialog_287_0_5 = function(socket, id, hash, callback) { //Том
	callback(4, 2);
}

exports.dialog_292_32_0 = function(socket, id, hash) { //<Оружейник>/nКартмен
	redirectToDialog(socket, id, hash, 0, socket.session.actor.nickname);
}

exports.dialog_292_2_1 = function(socket, id, hash, callback) { //<Оружейник>/nКартмен
	callback(0);
}

exports.dialog_292_76_2 = function(socket, id, hash, callback) { //<Оружейник>/nКартмен
	callback(5);
}

exports.dialog_292_77_1 = function(socket, id, hash) { //<Оружейник>/nКартмен
	var item = {
		identify: 1,
		item_view: 1,
		amount: 100000,
		item_id: 783 //Стальная стрела
	}
	addItemToInventory(socket, 5151, genBinaryItem(item, socket.session.actor.id), 5, hash)
}

exports.dialog_292_78_1 = function(socket, id, hash) { //<Оружейник>/nКартмен
	var item = {
		identify: 1,
		item_view: 1,
		amount: 100000,
		item_id: 2827 //Красный камень души
	}
	addItemToInventory(socket, 5151, genBinaryItem(item, socket.session.actor.id), 5, hash)
}

exports.dialog_296_32_0 = function(socket, id, hash) { //<Алхимик>/nЭмили
	redirectToDialog(socket, id, hash, 0, socket.session.actor.nickname);
}

exports.dialog_296_1_1 = function(socket, id, hash, callback) { //<Алхимик>/nЭмили
	callback(0);
}

exports.dialog_296_76_2 = function(socket, id, hash, callback) { //<Алхимик>/nЭмили
	callback(5);
}

exports.dialog_1077_32_0 = function(socket, id, hash) { //<Мастер перемещений>/nГесфент
	redirectToDialog(socket, id, hash, 0, socket.session.actor.nickname);
}

exports.dialog_1077_1_0 = function(socket, id, hash, callback) { //<Мастер перемещений>/nГесфент
	callback(2, {"x": 356104,"y": 15610, "z": 291129, "price": 50});
}

exports.dialog_1077_2_0 = function(socket, id, hash, callback) { //<Мастер перемещений>/nГесфент
	callback(2, {"x": 417428,"y": 19685, "z": 150344, "price": 120});
}

exports.dialog_1077_9_0 = function(socket, id, hash, callback) { //<Мастер перемещений>/nГесфент
	callback(2, {"x": 192858,"y": 23794, "z": 106895, "price": 50});
}

exports.dialog_1077_3_0 = function(socket, id, hash, callback) { //<Мастер перемещений>/nГесфент
	callback(2, {"x": 219054,"y": 20305, "z": 194171, "price": 100});
}

exports.dialog_1077_4_0 = function(socket, id, hash, callback) { //<Мастер перемещений>/nГесфент
	callback(2, {"x": 97358,"y": 11221, "z": 264630, "price": 100});
}

exports.dialog_1077_5_0 = function(socket, id, hash, callback) { //<Мастер перемещений>/nГесфент
	callback(2, {"x": 162977,"y": 17627, "z": 317634, "price": 100});
}

exports.dialog_1077_8_0 = function(socket, id, hash, callback) { //<Мастер перемещений>/nГесфент
	callback(2, {"x": 263552,"y": 20285, "z": 224171, "price": 30});
}

exports.dialog_1077_6_0 = function(socket, id, hash, callback) { //<Мастер перемещений>/nГесфент
	callback(2, {"x": 381172,"y": 16579, "z": 306558, "price": 50});
}

exports.dialog_1077_11_0 = function(socket, id, hash, callback) { //<Мастер перемещений>/nГесфент
	if (socket.session.actor.class != 2 && socket.session.actor.class != 4) {
		redirectToDialog(socket, id, hash, 99, socket.session.actor.nickname);
		return;
	}
	callback(2, {"x": 803134,"y": 17383, "z": 715812, "price": 200});
}

exports.dialog_610_32_0 = function(socket, id, hash) { //<Мастер перемещений>/nГесфент
	redirectToDialog(socket, id, hash, 0, socket.session.actor.nickname);
}

exports.dialog_610_1_0 = function(socket, id, hash, callback) { //<Мастер перемещений>/nГесфент
	callback(2, {"x": 356104,"y": 15610, "z": 291129, "price": 50});
}

exports.dialog_610_2_0 = function(socket, id, hash, callback) { //<Мастер перемещений>/nГесфент
	callback(2, {"x": 417428,"y": 19685, "z": 150344, "price": 120});
}

exports.dialog_610_9_0 = function(socket, id, hash, callback) { //<Мастер перемещений>/nГесфент
	callback(2, {"x": 192858,"y": 23794, "z": 106895, "price": 50});
}

exports.dialog_610_3_0 = function(socket, id, hash, callback) { //<Мастер перемещений>/nГесфент
	callback(2, {"x": 219054,"y": 20305, "z": 194171, "price": 100});
}

exports.dialog_610_4_0 = function(socket, id, hash, callback) { //<Мастер перемещений>/nГесфент
	callback(2, {"x": 97358,"y": 11221, "z": 264630, "price": 100});
}

exports.dialog_610_5_0 = function(socket, id, hash, callback) { //<Мастер перемещений>/nГесфент
	callback(2, {"x": 162977,"y": 17627, "z": 317634, "price": 100});
}

exports.dialog_610_8_0 = function(socket, id, hash, callback) { //<Мастер перемещений>/nГесфент
	callback(2, {"x": 263552,"y": 20285, "z": 224171, "price": 30});
}

exports.dialog_610_6_0 = function(socket, id, hash, callback) { //<Мастер перемещений>/nГесфент
	callback(2, {"x": 381172,"y": 16579, "z": 306558, "price": 50});
}

exports.dialog_610_11_0 = function(socket, id, hash, callback) { //<Мастер перемещений>/nГесфент
	if (socket.session.actor.class != 2 && socket.session.actor.class != 4) {
		redirectToDialog(socket, id, hash, 99, socket.session.actor.nickname);
		return;
	}
	callback(2, {"x": 803134,"y": 17383, "z": 715812, "price": 200});
}

exports.dialog_576_32_0 = function(socket, id, hash) { //Бигфут
	redirectToDialog(socket, id, hash, 0, socket.session.actor.nickname);
}

exports.dialog_576_1_0 = function(socket, id, hash, callback) { //Бигфут
	Dialog.changeItemsToBox(socket, [{item_id:813,amount:1},{item_id:409,amount:10}], 3, id, hash, [91,92], 81, 5)
}


exports.dialog_333_32_0 = function(socket, id, hash) { //Ювелир Сэм
	redirectToDialog(socket, id, hash, 0, socket.session.actor.nickname);
}

exports.dialog_333_19_2 = function(socket, id, hash, callback) { //Ювелир Сэм
	callback(5);
}

exports.dialog_333_20_0 = function(socket, id, hash) { //Ювелир Сэм
	redirectToDialog(socket, id, hash, 10, socket.session.actor.nickname);
}




//===========================================Деревня Роден=============================================

exports.dialog_747_32_0 = function(socket, id, hash) { //Джеммер
	redirectToDialog(socket, id, hash, 0);
}

exports.dialog_747_0_4 = function(socket, id, hash, callback) { //Джеммер
	callback(4, 1);
}

exports.dialog_747_0_5 = function(socket, id, hash, callback) { //Джеммер
	callback(4, 2);
}

exports.dialog_750_32_0 = function(socket, id, hash) { //<Оружейник>/nРуу
	redirectToDialog(socket, id, hash, 0, socket.session.actor.nickname);
}

exports.dialog_750_2_1 = function(socket, id, hash, callback) { //<Оружейник>/nРуу
	callback(0);
}

exports.dialog_750_76_2 = function(socket, id, hash, callback) { //<Оружейник>/nРуу
	callback(5);
}

exports.dialog_750_77_1 = function(socket, id, hash) { //<Оружейник>/nРуу
	var item = {
		identify: 1,
		item_view: 1,
		amount: 100000,
		item_id: 783 //Стальная стрела
	}
	addItemToInventory(socket, 5151, genBinaryItem(item, socket.session.actor.id), 5, hash)
}

exports.dialog_750_78_1 = function(socket, id, hash) { //<Оружейник>/nРуу
	var item = {
		identify: 1,
		item_view: 1,
		amount: 100000,
		item_id: 2827 //Красный камень души
	}
	addItemToInventory(socket, 5151, genBinaryItem(item, socket.session.actor.id), 5, hash)
}

exports.dialog_751_32_0 = function(socket, id, hash) { //<Алхимик>/nКсения
	redirectToDialog(socket, id, hash, 0, socket.session.actor.nickname);
}

exports.dialog_751_46_1 = function(socket, id, hash, callback) { //<Алхимик>/nКсения
	callback(0);
}

exports.dialog_751_76_2 = function(socket, id, hash, callback) { //<Алхимик>/nКсения
	callback(5);
}

exports.dialog_752_32_0 = function(socket, id, hash) { //<Мастер перемещений>/nФасфа
	redirectToDialog(socket, id, hash, 0, socket.session.actor.nickname);
}

exports.dialog_752_1_0 = function(socket, id, hash, callback) { //<Мастер перемещений>/nФасфа
	callback(2, {"x": 356104,"y": 15610, "z": 291129, "price": 120});
}

exports.dialog_752_2_0 = function(socket, id, hash, callback) { //<Мастер перемещений>/nФасфа
	callback(2, {"x": 417428,"y": 19685, "z": 150344, "price": 60});
}

exports.dialog_752_3_0 = function(socket, id, hash, callback) { //<Мастер перемещений>/nФасфа
	callback(2, {"x": 215548,"y": 11588, "z": 237111, "price": 50});
}

exports.dialog_752_4_0 = function(socket, id, hash, callback) { //<Мастер перемещений>/nФасфа
	callback(2, {"x": 263552,"y": 20285, "z": 224171, "price": 30});
}

exports.dialog_752_5_0 = function(socket, id, hash, callback) { //<Мастер перемещений>/nФасфа
	callback(2, {"x": 381172,"y": 16579, "z": 306558, "price": 120});
}

exports.dialog_752_11_0 = function(socket, id, hash, callback) { //<Мастер перемещений>/nФасфа
	if (socket.session.actor.class != 2 && socket.session.actor.class != 4) {
		redirectToDialog(socket, id, hash, 99, socket.session.actor.nickname);
		return;
	}
	callback(2, {"x": 803134,"y": 17383, "z": 715812, "price": 200});
}

exports.dialog_749_32_0 = function(socket, id, hash) { //Рой
	redirectToDialog(socket, id, hash, 0, socket.session.actor.nickname);
}

exports.dialog_749_1_0 = function(socket, id, hash, callback) { //Рой
	Dialog.changeItemsToBox(socket, [{item_id:813,amount:1},{item_id:409,amount:10}], 3, id, hash, [91,92], 81, 5)
}

exports.dialog_1779_32_0 = function(socket, id, hash) { //Вход в Иллюмку
	redirectToDialog(socket, id, hash, 0, socket.session.actor.nickname);
}

exports.dialog_1779_1_0 = function(socket, id, hash, callback) { //Вход в Иллюмку
	callback(2, {"x": 598145,"y": 15249, "z": 400423});
}


//===========================================Деревня Байрон=============================================

exports.dialog_629_32_0 = function(socket, id, hash) { //Корони
	redirectToDialog(socket, id, hash, 0);
}

exports.dialog_629_0_4 = function(socket, id, hash, callback) { //Корони
	callback(4, 1);
}

exports.dialog_629_0_5 = function(socket, id, hash, callback) { //Корони
	callback(4, 2);
}

exports.dialog_627_32_0 = function(socket, id, hash) { //<Оружейник>/nКорден
	redirectToDialog(socket, id, hash, 0, socket.session.actor.nickname);
}

exports.dialog_627_2_1 = function(socket, id, hash, callback) { //<Оружейник>/nКорден
	callback(0);
}

exports.dialog_627_76_2 = function(socket, id, hash, callback) { //<Оружейник>/nКорден
	callback(5);
}

exports.dialog_627_77_1 = function(socket, id, hash) { //<Оружейник>/nКорден
	var item = {
		identify: 1,
		item_view: 1,
		amount: 100000,
		item_id: 783 //Стальная стрела
	}
	addItemToInventory(socket, 5151, genBinaryItem(item, socket.session.actor.id), 5, hash)
}

exports.dialog_627_78_1 = function(socket, id, hash) { //<Оружейник>/nКорден
	var item = {
		identify: 1,
		item_view: 1,
		amount: 100000,
		item_id: 2827 //Красный камень души
	}
	addItemToInventory(socket, 5151, genBinaryItem(item, socket.session.actor.id), 5, hash)
}

exports.dialog_628_32_0 = function(socket, id, hash) { //<Алхимик>/nДжени
	redirectToDialog(socket, id, hash, 0, socket.session.actor.nickname);
}

exports.dialog_628_1_1 = function(socket, id, hash, callback) { //<Алхимик>/nДжени
	callback(0);
}

exports.dialog_628_76_2 = function(socket, id, hash, callback) { //<Алхимик>/nДжени
	callback(5);
}

exports.dialog_684_32_0 = function(socket, id, hash) { //<Мастер перемещений>/nМинт
	redirectToDialog(socket, id, hash, 0, socket.session.actor.nickname);
}

exports.dialog_684_1_0 = function(socket, id, hash, callback) { //<Мастер перемещений>/nМинт
	callback(2, {"x": 356104,"y": 15610, "z": 291129, "price": 60});
}

exports.dialog_684_2_0 = function(socket, id, hash, callback) { //<Мастер перемещений>/nМинт
	callback(2, {"x": 215548, "y": 11588, "z": 237111, "price": 120});
}

exports.dialog_684_9_0 = function(socket, id, hash, callback) { //<Мастер перемещений>/nМинт
	callback(2, {"x": 192858,"y": 23794, "z": 106895, "price": 60});
}

exports.dialog_684_3_0 = function(socket, id, hash, callback) { //<Мастер перемещений>/nМинт
	callback(2, {"x": 441183,"y": 16089, "z": 210199, "price": 100});
}

exports.dialog_684_4_0 = function(socket, id, hash, callback) { //<Мастер перемещений>/nМинт
	callback(2, {"x": 342825,"y": 11343, "z": 149216, "price": 100});
}

exports.dialog_684_7_0 = function(socket, id, hash, callback) { //<Мастер перемещений>/nМинт
	callback(2, {"x": 263552,"y": 20285, "z": 224171, "price": 100});
}

exports.dialog_684_6_0 = function(socket, id, hash, callback) { //<Мастер перемещений>/nМинт
	callback(2, {"x": 381172,"y": 16579, "z": 306558, "price": 60});
}

exports.dialog_684_11_0 = function(socket, id, hash, callback) { //<Мастер перемещений>/nМинт
	if (socket.session.actor.class != 2 && socket.session.actor.class != 4) {
		redirectToDialog(socket, id, hash, 99, socket.session.actor.nickname);
		return;
	}
	callback(2, {"x": 803134,"y": 17383, "z": 715812, "price": 200});
}

exports.dialog_889_32_0 = function(socket, id, hash) { //Винс
	redirectToDialog(socket, id, hash, 0);
}

exports.dialog_889_0_4 = function(socket, id, hash, callback) { //Винс
	callback(4, 1);
}

exports.dialog_691_32_0 = function(socket, id, hash) { //Крюгер
	redirectToDialog(socket, id, hash, 0, socket.session.actor.nickname);
}

exports.dialog_691_1_0 = function(socket, id, hash, callback) { //Крюгер
	Dialog.changeItemsToBox(socket, [{item_id:813,amount:1},{item_id:409,amount:10}], 3, id, hash, [91,92], 81, 5)
}

exports.dialog_1067_32_0 = function(socket, id, hash) { //Сундук выбора
	redirectToDialog(socket, id, hash, 0, socket.session.actor.nickname);
}

exports.dialog_1067_2_0 = function(socket, id, hash, callback) { //Сундук выбора
	Dialog.changeItemsToBox(socket, [{item_id:2816,amount:1},{item_id:409,amount:100}], 2816, id, hash, [11,12], 13, 10)
}


exports.dialog_1295_32_0 = function(socket, id, hash) { //Вход в Пиратку
	redirectToDialog(socket, id, hash, 0, socket.session.actor.nickname);
}

exports.dialog_1295_80_0 = function(socket, id, hash, callback) { //Вход в Пиратку
	if (socket.session.actor.level >= 60) {
		callback(2, {"x": 971005,"y": 13764, "z": 1157333});
	}
}


exports.dialog_748_32_0 = function(socket, id, hash) { //Ювелир Сэм
	redirectToDialog(socket, id, hash, 0, socket.session.actor.nickname);
}

exports.dialog_748_19_2 = function(socket, id, hash, callback) { //Ювелир Сэм
	callback(5);
}

exports.dialog_748_20_0 = function(socket, id, hash) { //Ювелир Сэм
	redirectToDialog(socket, id, hash, 10, socket.session.actor.nickname);
}

exports.dialog_682_32_0 = function(socket, id, hash) { //Ювелир Сэм
	redirectToDialog(socket, id, hash, 0, socket.session.actor.nickname);
}

exports.dialog_682_19_2 = function(socket, id, hash, callback) { //Ювелир Сэм
	callback(5);
}

exports.dialog_682_20_0 = function(socket, id, hash) { //Ювелир Сэм
	redirectToDialog(socket, id, hash, 10, socket.session.actor.nickname);
}

//===========================================Храм Метеоса=============================================


exports.dialog_900_32_0 = function(socket, id, hash) { //<Телепорт>/nЭльф Канесел
	redirectToDialog(socket, id, hash, 0, socket.session.actor.nickname);
}

exports.dialog_900_1_0 = function(socket, id, hash, callback) { //<Телепорт>/nЭльф Канесел
	callback(2, {"x": 356104,"y": 15610, "z": 291129});
}

exports.dialog_900_2_0 = function(socket, id, hash, callback) { //<Телепорт>/nЭльф Канесел
	callback(2, {"x": 215548,"y": 11588, "z": 237111});
}

exports.dialog_900_3_0 = function(socket, id, hash, callback) { //<Телепорт>/nЭльф Канесел
	callback(2, {"x": 417428,"y": 19685, "z": 150344});
}

exports.dialog_900_4_0 = function(socket, id, hash, callback) { //<Телепорт>/nЭльф Канесел
	callback(2, {"x": 192858,"y": 23794, "z": 106895});
}

exports.dialog_884_32_0 = function(socket, id, hash) { //<Телепорт>/nЭльф Илларион
	redirectToDialog(socket, id, hash, 0, socket.session.actor.nickname);
}

exports.dialog_884_1_0 = function(socket, id, hash, callback) { //<Телепорт>/nЭльф Илларион
	callback(2, {"x": 16508,"y": 14227, "z": 485973, "price": 500});
}

exports.dialog_890_77_1 = function(socket, id, hash) { //<Оружейник>/nЭрмес
	var item = {
		identify: 1,
		item_view: 1,
		amount: 100000,
		item_id: 783 //Стальная стрела
	}
	addItemToInventory(socket, 5151, genBinaryItem(item, socket.session.actor.id), 5, hash)
}

exports.dialog_890_78_1 = function(socket, id, hash) { //<Оружейник>/nЭрмес
	var item = {
		identify: 1,
		item_view: 1,
		amount: 100000,
		item_id: 2827 //Красный камень души
	}
	addItemToInventory(socket, 5151, genBinaryItem(item, socket.session.actor.id), 5, hash)
}

exports.dialog_902_32_0 = function(socket, id, hash) { //<Алхимик>/nАндрей
	redirectToDialog(socket, id, hash, 0, socket.session.actor.nickname);
}

exports.dialog_902_50_1 = function(socket, id, hash, callback) { //<Алхимик>/nАндрей
	callback(0);
}

exports.dialog_902_76_2 = function(socket, id, hash, callback) { //<Алхимик>/nАндрей
	callback(5);
}

exports.dialog_890_32_0 = function(socket, id, hash) { //<Оружейник>/nЭрмес
	redirectToDialog(socket, id, hash, 0, socket.session.actor.nickname);
}

exports.dialog_890_48_1 = function(socket, id, hash, callback) { //<Оружейник>/nЭрмес
	callback(0);
}

exports.dialog_890_76_2 = function(socket, id, hash, callback) { //<Оружейник>/nЭрмес
	callback(5);
}

//===========================================Иллюмка=============================================


exports.dialog_1835_32_0 = function(socket, id, hash) { //<Телепорт>/nЭльф Канесел
	redirectToDialog(socket, id, hash, 0, socket.session.actor.nickname);
}

exports.dialog_1835_1_0 = function(socket, id, hash, callback) { //<Телепорт>/nЭльф Канесел
	callback(2, {"x": 356104,"y": 15610, "z": 291129});
}

exports.dialog_1835_2_0 = function(socket, id, hash, callback) { //<Телепорт>/nЭльф Канесел
	callback(2, {"x": 215548,"y": 11588, "z": 237111});
}

exports.dialog_1835_3_0 = function(socket, id, hash, callback) { //<Телепорт>/nЭльф Канесел
	callback(2, {"x": 417428,"y": 19685, "z": 150344});
}

exports.dialog_1835_4_0 = function(socket, id, hash, callback) { //<Телепорт>/nЭльф Канесел
	callback(2, {"x": 192858,"y": 23794, "z": 106895});
}

exports.dialog_1817_32_0 = function(socket, id, hash) { //<Алхимик>/nАндрей
	redirectToDialog(socket, id, hash, 0, socket.session.actor.nickname);
}

exports.dialog_1817_50_1 = function(socket, id, hash, callback) { //<Алхимик>/nАндрей
	callback(0);
}

exports.dialog_1817_76_2 = function(socket, id, hash, callback) { //<Алхимик>/nАндрей
	callback(5);
}

exports.dialog_1816_32_0 = function(socket, id, hash) { //<Оружейник>/nЭрмес
	redirectToDialog(socket, id, hash, 0, socket.session.actor.nickname);
}

exports.dialog_1816_48_1 = function(socket, id, hash, callback) { //<Оружейник>/nЭрмес
	callback(0);
}

exports.dialog_1816_76_2 = function(socket, id, hash, callback) { //<Оружейник>/nЭрмес
	callback(5);
}

exports.dialog_1865_32_0 = function(socket, id, hash) { //Эносс
	redirectToDialog(socket, id, hash, 0);
}

exports.dialog_1865_0_4 = function(socket, id, hash, callback) { //Эносс
	callback(4, 1);
}




//===========================================Башня Метеоса=============================================


exports.dialog_1719_32_0 = function(socket, id, hash) { //<Охотники на Метеоса>/nСоди
	redirectToDialog(socket, id, hash, 0, socket.session.actor.nickname);
}

exports.dialog_1719_1_0 = function(socket, id, hash, callback) { //<Охотники на Метеоса>/nСоди
	callback(2, {"x": 251481,"y": 13111, "z": 542328});
}

exports.dialog_1654_32_0 = function(socket, id, hash) { //<Охотники на Метеоса>/nСоди
	redirectToDialog(socket, id, hash, 0, socket.session.actor.nickname);
}

exports.dialog_1654_1_0 = function(socket, id, hash, callback) { //<Охотники на Метеоса>/nСоди
	callback(2, {"x": 961400,"y": 38662, "z": 1275984});
}

exports.dialog_1654_2_0 = function(socket, id, hash, callback) { //<Охотники на Метеоса>/nСоди
	callback(2, {"x": 965949,"y": 43880, "z": 1277454});
}

exports.dialog_1654_3_0 = function(socket, id, hash, callback) { //<Охотники на Метеоса>/nСоди
	callback(2, {"x": 959538,"y": 49904, "z": 1280993});
}

exports.dialog_1654_4_0 = function(socket, id, hash, callback) { //<Охотники на Метеоса>/nСоди
	callback(2, {"x": 955270,"y": 53929, "z": 1275772});
}

exports.dialog_1710_32_0 = function(socket, id, hash) { //Хилки бм1
	redirectToDialog(socket, id, hash, 0, socket.session.actor.nickname);
}

exports.dialog_1710_71_1 = function(socket, id, hash, callback) { //Хилки бм1
	callback(0);
}

exports.dialog_1711_32_0 = function(socket, id, hash) { //Хилки бм2
	redirectToDialog(socket, id, hash, 0, socket.session.actor.nickname);
}

exports.dialog_1711_71_1 = function(socket, id, hash, callback) { //Хилки бм2
	callback(0);
}

exports.dialog_1712_32_0 = function(socket, id, hash) { //Хилки бм3
	redirectToDialog(socket, id, hash, 0, socket.session.actor.nickname);
}

exports.dialog_1712_71_1 = function(socket, id, hash, callback) { //Хилки бм3
	callback(0);
}

exports.dialog_1713_32_0 = function(socket, id, hash) { //Хилки бм4
	redirectToDialog(socket, id, hash, 0, socket.session.actor.nickname);
}

exports.dialog_1713_71_1 = function(socket, id, hash, callback) { //Хилки бм4
	callback(0);
}



//===========================================Деревня Акра=============================================

exports.dialog_1056_32_0 = function(socket, id, hash) { //<Оружейник>/nНиколло
	redirectToDialog(socket, id, hash, 0, socket.session.actor.nickname);
}

exports.dialog_1056_2_1 = function(socket, id, hash, callback) { //<Оружейник>/nНиколло
	callback(0);
}

exports.dialog_1056_76_2 = function(socket, id, hash, callback) { //<Оружейник>/nНиколло
	callback(5);
}

exports.dialog_1056_77_1 = function(socket, id, hash) { //<Оружейник>/nНиколло
	var item = {
		identify: 1,
		item_view: 1,
		amount: 100000,
		item_id: 783 //Стальная стрела
	}
	addItemToInventory(socket, 5151, genBinaryItem(item, socket.session.actor.id), 5, hash)
}

exports.dialog_1056_78_1 = function(socket, id, hash) { //<Оружейник>/nНиколло
	var item = {
		identify: 1,
		item_view: 1,
		amount: 100000,
		item_id: 2827 //Красный камень души
	}
	addItemToInventory(socket, 5151, genBinaryItem(item, socket.session.actor.id), 5, hash)
}

exports.dialog_1053_32_0 = function(socket, id, hash) { //<Магазин новичков>/nОрсэ
	redirectToDialog(socket, id, hash, 0, socket.session.actor.nickname);
}

exports.dialog_1053_13_1 = function(socket, id, hash, callback) { //<Магазин новичков>/nОрсэ
	callback(0);
}

exports.dialog_1053_76_2 = function(socket, id, hash, callback) { //<Магазин новичков>/nОрсэ
	callback(5);
}
exports.dialog_1053_77_1 = function(socket, id, hash) { //<Магазин новичков>/nОрсэ
	var item = {
		identify: 1,
		item_view: 1,
		amount: 50,
		item_id: 865 //Зелье здоровья новичка
	}
	addItemToInventory(socket, 5151, genBinaryItem(item, socket.session.actor.id), 5, hash)
}

exports.dialog_1048_32_0 = function(socket, id, hash) { //Янфу
	redirectToDialog(socket, id, hash, 0);
}

exports.dialog_1048_0_4 = function(socket, id, hash, callback) { //Янфу
	callback(4, 1);
}

exports.dialog_1048_0_5 = function(socket, id, hash, callback) { //Янфу
	callback(4, 2);
}

exports.dialog_1047_32_0 = function(socket, id, hash) { //<Мастер перемещений>/nЯна
	redirectToDialog(socket, id, hash, 0, socket.session.actor.nickname);
}

exports.dialog_1047_1_0 = function(socket, id, hash, callback) { //<Мастер перемещений>/nЯна
	callback(2, {"x": 356104,"y": 15610, "z": 291129, "price": 10});
}

exports.dialog_1047_2_0 = function(socket, id, hash, callback) { //<Мастер перемещений>/nЯна
	callback(2, {"x": 215548,"y": 11588, "z": 237111, "price": 10});
}


exports.dialog_1025_32_0 = function(socket, id, hash) { //<Алхимик>/nИкка
	redirectToDialog(socket, id, hash, 0, socket.session.actor.nickname);
}

exports.dialog_1025_61_1 = function(socket, id, hash, callback) { //<Алхимик>/nИкка
	callback(0);
}

exports.dialog_1025_76_2 = function(socket, id, hash, callback) { //<Алхимик>/nИкка
	callback(5);
}



exports.dialog_2527_32_0 = function(socket, id, hash) { //Ангел
	redirectToDialog(socket, id, hash, 0, socket.session.actor.nickname);
}

exports.dialog_2527_1_0 = function(socket, id, hash, callback) { //Ангел
	callback(3, {buffs: [7, 93, 96, 99], price: 100});
}

exports.dialog_2527_2_0 = function(socket, id, hash, callback) { //Ангел
	callback(3, {buffs: [7, 94, 97, 100], price: 1000});
}

exports.dialog_2527_3_0 = function(socket, id, hash, callback) { //Ангел
	callback(3, {buffs: [7, 95, 98, 101], price: 10000});
}




//===========================================Эльтер=============================================


exports.dialog_2339_32_0 = function(socket, id, hash) { //<Телепорт>/nЭльф Канесел
	redirectToDialog(socket, id, hash, 0, socket.session.actor.nickname);
}

exports.dialog_2339_1_0 = function(socket, id, hash, callback) { //<Телепорт>/nЭльф Канесел
	callback(2, {"x": 356104,"y": 15610, "z": 291129});
}

exports.dialog_2339_2_0 = function(socket, id, hash, callback) { //<Телепорт>/nЭльф Канесел
	callback(2, {"x": 215548,"y": 11588, "z": 237111});
}

exports.dialog_2339_3_0 = function(socket, id, hash, callback) { //<Телепорт>/nЭльф Канесел
	callback(2, {"x": 417428,"y": 19685, "z": 150344});
}

exports.dialog_2339_4_0 = function(socket, id, hash, callback) { //<Телепорт>/nЭльф Канесел
	callback(2, {"x": 192858,"y": 23794, "z": 106895});
}

exports.dialog_2338_32_0 = function(socket, id, hash) { //<Телепорт>/nЭльф Канесел
	redirectToDialog(socket, id, hash, 0, socket.session.actor.nickname);
}

exports.dialog_2338_1_0 = function(socket, id, hash, callback) { //<Телепорт>/nЭльф Канесел
	callback(2, {"x": 356104,"y": 15610, "z": 291129});
}

exports.dialog_2338_2_0 = function(socket, id, hash, callback) { //<Телепорт>/nЭльф Канесел
	callback(2, {"x": 215548,"y": 11588, "z": 237111});
}

exports.dialog_2338_3_0 = function(socket, id, hash, callback) { //<Телепорт>/nЭльф Канесел
	callback(2, {"x": 417428,"y": 19685, "z": 150344});
}

exports.dialog_2338_4_0 = function(socket, id, hash, callback) { //<Телепорт>/nЭльф Канесел
	callback(2, {"x": 192858,"y": 23794, "z": 106895});
}

exports.dialog_2338_32_0 = function(socket, id, hash) { //<Телепорт>/nЭльф Канесел
	redirectToDialog(socket, id, hash, 0, socket.session.actor.nickname);
}

exports.dialog_2338_1_0 = function(socket, id, hash, callback) { //<Телепорт>/nЭльф Канесел
	callback(2, {"x": 356104,"y": 15610, "z": 291129});
}

exports.dialog_2338_2_0 = function(socket, id, hash, callback) { //<Телепорт>/nЭльф Канесел
	callback(2, {"x": 215548,"y": 11588, "z": 237111});
}

exports.dialog_2338_3_0 = function(socket, id, hash, callback) { //<Телепорт>/nЭльф Канесел
	callback(2, {"x": 417428,"y": 19685, "z": 150344});
}

exports.dialog_2338_4_0 = function(socket, id, hash, callback) { //<Телепорт>/nЭльф Канесел
	callback(2, {"x": 192858,"y": 23794, "z": 106895});
}


exports.dialog_2351_32_0 = function(socket, id, hash) { //<Алхимик>/nАндрей
	redirectToDialog(socket, id, hash, 0, socket.session.actor.nickname);
}

exports.dialog_2351_79_1 = function(socket, id, hash, callback) { //<Алхимик>/nАндрей
	callback(0);
}

exports.dialog_2351_76_2 = function(socket, id, hash, callback) { //<Алхимик>/nАндрей
	callback(5);
}

exports.dialog_2336_32_0 = function(socket, id, hash) { //<Алхимик>/nАндрей
	redirectToDialog(socket, id, hash, 0, socket.session.actor.nickname);
}

exports.dialog_2336_79_1 = function(socket, id, hash, callback) { //<Алхимик>/nАндрей
	callback(0);
}

exports.dialog_2336_76_2 = function(socket, id, hash, callback) { //<Алхимик>/nАндрей
	callback(5);
}

exports.dialog_2338_32_0 = function(socket, id, hash) { //<Оружейник>/nЭрмес
	redirectToDialog(socket, id, hash, 0, socket.session.actor.nickname);
}

exports.dialog_2338_48_1 = function(socket, id, hash, callback) { //<Оружейник>/nЭрмес
	callback(0);
}

exports.dialog_2338_76_2 = function(socket, id, hash, callback) { //<Оружейник>/nЭрмес
	callback(5);
}

exports.dialog_2352_32_0 = function(socket, id, hash) { //<Оружейник>/nЭрмес
	redirectToDialog(socket, id, hash, 0, socket.session.actor.nickname);
}

exports.dialog_2352_48_1 = function(socket, id, hash, callback) { //<Оружейник>/nЭрмес
	callback(0);
}

exports.dialog_2352_76_2 = function(socket, id, hash, callback) { //<Оружейник>/nЭрмес
	callback(5);
}

exports.dialog_2337_32_0 = function(socket, id, hash) { //<Оружейник>/nЭрмес
	redirectToDialog(socket, id, hash, 0, socket.session.actor.nickname);
}

exports.dialog_2337_48_1 = function(socket, id, hash, callback) { //<Оружейник>/nЭрмес
	callback(0);
}

exports.dialog_2337_76_2 = function(socket, id, hash, callback) { //<Оружейник>/nЭрмес
	callback(5);
}


exports.dialog_934_32_0 = function(socket, id, hash) { //<Продавец книг умений>/nКен
	redirectToDialog(socket, id, hash, 0, socket.session.actor.nickname);
}

exports.dialog_934_52_1 = function(socket, id, hash, callback) { //<Продавец книг умений>/nКен
	callback(0);
}

exports.dialog_934_76_2 = function(socket, id, hash, callback) { //<Продавец книг умений>/nКен
	callback(5);
}

exports.dialog_2340_32_0 = function(socket, id, hash) { //Винс
	redirectToDialog(socket, id, hash, 0);
}

exports.dialog_2340_0_4 = function(socket, id, hash, callback) { //Винс
	callback(4, 1);
}


exports.dialog_2353_32_0 = function(socket, id, hash) { //<Продавец Материалов>/nЛютор
	redirectToDialog(socket, id, hash, 0, socket.session.actor.nickname);
}

exports.dialog_2353_53_1 = function(socket, id, hash, callback) { //<Продавец Материалов>/nЛютор
	callback(0);
}

exports.dialog_2353_76_2 = function(socket, id, hash, callback) { //<Продавец Материалов>/nЛютор
	callback(5);
}


//===========================================Руины полнолуния=============================================


exports.dialog_2023_32_0 = function(socket, id, hash) { //<Телепорт>/nЭльф Канесел
	redirectToDialog(socket, id, hash, 0, socket.session.actor.nickname);
}

exports.dialog_2023_1_0 = function(socket, id, hash, callback) { //<Телепорт>/nЭльф Канесел
	callback(2, {"x": 356104,"y": 15610, "z": 291129});
}

exports.dialog_2023_2_0 = function(socket, id, hash, callback) { //<Телепорт>/nЭльф Канесел
	callback(2, {"x": 215548,"y": 11588, "z": 237111});
}

exports.dialog_2023_3_0 = function(socket, id, hash, callback) { //<Телепорт>/nЭльф Канесел
	callback(2, {"x": 417428,"y": 19685, "z": 150344});
}

exports.dialog_2023_4_0 = function(socket, id, hash, callback) { //<Телепорт>/nЭльф Канесел
	callback(2, {"x": 192858,"y": 23794, "z": 106895});
}

exports.dialog_2005_32_0 = function(socket, id, hash) { //<Алхимик>/nАндрей
	redirectToDialog(socket, id, hash, 0, socket.session.actor.nickname);
}

exports.dialog_2005_50_1 = function(socket, id, hash, callback) { //<Алхимик>/nАндрей
	callback(0);
}

exports.dialog_2005_76_2 = function(socket, id, hash, callback) { //<Алхимик>/nАндрей
	callback(5);
}

exports.dialog_2004_32_0 = function(socket, id, hash) { //<Оружейник>/nЭрмес
	redirectToDialog(socket, id, hash, 0, socket.session.actor.nickname);
}

exports.dialog_2004_48_1 = function(socket, id, hash, callback) { //<Оружейник>/nЭрмес
	callback(0);
}

exports.dialog_2004_76_2 = function(socket, id, hash, callback) { //<Оружейник>/nЭрмес
	callback(5);
}

exports.dialog_2006_32_0 = function(socket, id, hash) { //Винс
	redirectToDialog(socket, id, hash, 0);
}

exports.dialog_2006_0_4 = function(socket, id, hash, callback) { //Винс
	callback(4, 1);
}



//===========================================Владения Фуриэ=============================================
exports.dialog_2689_32_0 = function(socket, id, hash, callback) { //Ущелье измерений (Вход в ПВ)
	if (socket.session.actor.level >= 40 && socket.session.actor.level <= 59) {
		redirectToDialog(socket, id, hash, 1, socket.session.actor.nickname);
	} else if (socket.session.actor.level >= 60 && socket.session.actor.level <= 69) {
		redirectToDialog(socket, id, hash, 2, socket.session.actor.nickname);
	} else if (socket.session.actor.level >= 70 && socket.session.actor.level <= 79) {
		redirectToDialog(socket, id, hash, 3, socket.session.actor.nickname);
	} else {
		redirectToDialog(socket, id, hash, 0, socket.session.actor.nickname);
	}
}

exports.dialog_2689_10_0 = function(socket, id, hash, callback) { //Ущелье измерений (Вход в ПВ) 40+
	if (socket.session.actor.level >= 40 && socket.session.actor.level <= 59) {
		callback(2, {"x":972181.5625, "y":13352, "z":1075241.625});
	}
}

exports.dialog_2689_11_0 = function(socket, id, hash, callback) { //Ущелье измерений (Вход в ПВ) 60+
	if (socket.session.actor.level >= 60 && socket.session.actor.level <= 69) {
		callback(2, {"x":1156959.625,"y":13891.4697265625,"z":954179.875});
	}
}

exports.dialog_2689_12_0 = function(socket, id, hash, callback) { //Ущелье измерений (Вход в ПВ) 70+
	if (socket.session.actor.level >= 70 && socket.session.actor.level <= 79) {
		callback(2, {"x":1149984.125,"y":13930.541015625,"z":781360.125});
	}
}


exports.dialog_2688_32_0 = function(socket, id, hash, callback) { //Акра (Вход в ПВ)
	if (socket.session.actor.level >= 40 && socket.session.actor.level <= 59) {
		redirectToDialog(socket, id, hash, 1, socket.session.actor.nickname);
	} else if (socket.session.actor.level >= 60 && socket.session.actor.level <= 69) {
		redirectToDialog(socket, id, hash, 2, socket.session.actor.nickname);
	} else if (socket.session.actor.level >= 70 && socket.session.actor.level <= 79) {
		redirectToDialog(socket, id, hash, 3, socket.session.actor.nickname);
	} else {
		redirectToDialog(socket, id, hash, 0, socket.session.actor.nickname);
	}
}

exports.dialog_2688_10_0 = function(socket, id, hash, callback) { //Акра (Вход в ПВ) 40+
	if (socket.session.actor.level >= 40 && socket.session.actor.level <= 59) {
		callback(2, {"x":972181.5625, "y":13352, "z":1075241.625});
	}
}

exports.dialog_2688_11_0 = function(socket, id, hash, callback) { //Акра (Вход в ПВ) 60+
	if (socket.session.actor.level >= 60 && socket.session.actor.level <= 69) {
		callback(2, {"x":1156959.625,"y":13891.4697265625,"z":954179.875});
	}
}

exports.dialog_2688_12_0 = function(socket, id, hash, callback) { //Акра (Вход в ПВ) 70+
	if (socket.session.actor.level >= 70 && socket.session.actor.level <= 79) {
		callback(2, {"x":1149984.125,"y":13930.541015625,"z":781360.125});
	}
}

exports.dialog_2346_32_0 = function(socket, id, hash) { //Вход в Эльтер
	redirectToDialog(socket, id, hash, 0, socket.session.actor.nickname);
}

exports.dialog_2346_1_0 = function(socket, id, hash, callback) { //Вход в Эльтер
	callback(2, {"x": 793426,"y": 30001, "z": 1097875});
}

exports.dialog_2015_32_0 = function(socket, id, hash) { //Вход в Эльтер
	redirectToDialog(socket, id, hash, 0, socket.session.actor.nickname);
}

exports.dialog_2015_1_0 = function(socket, id, hash, callback) { //Вход в Эльтер
	callback(2, {"x": 713989,"y": 15306, "z": 477491});
}


//===========================================Данжевые алхимики=============================================
exports.dialog_948_32_0 = function(socket, id, hash) { //Райнон(бп1)
	redirectToDialog(socket, id, hash, 0, socket.session.actor.nickname);
}

exports.dialog_948_10_0 = function(socket, id, hash, callback) { //Райнон(бп1)
	callback(0);
}

exports.dialog_766_32_0 = function(socket, id, hash) { //Ройо(лд2)
	redirectToDialog(socket, id, hash, 0, socket.session.actor.nickname);
}

exports.dialog_766_17_1 = function(socket, id, hash, callback) { //Ройо(лд2)
	callback(0);
}

exports.dialog_707_32_0 = function(socket, id, hash) { //Морская змея(пн1)
	redirectToDialog(socket, id, hash, 0, socket.session.actor.nickname);
}

exports.dialog_707_17_1 = function(socket, id, hash, callback) { //Морская змея(пн1)
	callback(0);
}

exports.dialog_626_32_0 = function(socket, id, hash) { //Дженди(бчд1)
	redirectToDialog(socket, id, hash, 0, socket.session.actor.nickname);
}

exports.dialog_626_17_1 = function(socket, id, hash, callback) { //Дженди(бчд1)
	callback(0);
}

exports.dialog_623_32_0 = function(socket, id, hash) { //Кабкаб(гк1)
	redirectToDialog(socket, id, hash, 0, socket.session.actor.nickname);
}

exports.dialog_623_17_1 = function(socket, id, hash, callback) { //Кабкаб(гк1)
	callback(0);
}

exports.dialog_1297_32_0 = function(socket, id, hash) { //зп1
	redirectToDialog(socket, id, hash, 0, socket.session.actor.nickname);
}

exports.dialog_1297_71_1 = function(socket, id, hash, callback) { //зп1
	callback(0);
}

exports.dialog_1296_32_0 = function(socket, id, hash) { //зп2
	redirectToDialog(socket, id, hash, 0, socket.session.actor.nickname);
}

exports.dialog_1296_71_1 = function(socket, id, hash, callback) { //зп2
	callback(0);
}

exports.dialog_1307_32_0 = function(socket, id, hash) { //Выход из зп
	redirectToDialog(socket, id, hash, 97, socket.session.actor.nickname);
}

exports.dialog_1307_98_0 = function(socket, id, hash, callback) { //<Выход из зп
	callback(2, {"x": 285116,"y": 18109, "z": 81088});
}

exports.dialog_625_32_0 = function(socket, id, hash) { //Ветер(лж1)
	redirectToDialog(socket, id, hash, 0, socket.session.actor.nickname);
}

exports.dialog_625_17_1 = function(socket, id, hash, callback) { //Ветер(лж1)
	callback(0);
}

exports.dialog_624_32_0 = function(socket, id, hash) { //Саша(лж1)
	redirectToDialog(socket, id, hash, 0, socket.session.actor.nickname);
}

exports.dialog_624_17_1 = function(socket, id, hash, callback) { //Саша(лж1)
	callback(0);
}

exports.dialog_708_32_0 = function(socket, id, hash) { //Гремлин-торговец(гк1)
	redirectToDialog(socket, id, hash, 0, socket.session.actor.nickname);
}

exports.dialog_708_17_1 = function(socket, id, hash, callback) { //Гремлин-торговец(гк1)
	callback(0);
}

exports.dialog_622_32_0 = function(socket, id, hash) { //Файрон(бо3)
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 85, isAccept: false, startQuestDialogId: 0}) != -1) { //Дополнить - открыть диалог для сдачи, если квест взят
		//
		return;
	} else {
		redirectToDialog(socket, id, hash, 99, socket.session.actor.nickname);
	}
}

exports.dialog_622_17_1 = function(socket, id, hash, callback) { //Файрон(бо3)
	callback(0);
}

exports.dialog_885_32_0 = function(socket, id, hash) { //<Странствующий торговец>\nБен(хм1)
	redirectToDialog(socket, id, hash, 0, socket.session.actor.nickname);
}

exports.dialog_885_49_1 = function(socket, id, hash, callback) { //<Странствующий торговец>\nБен(хм1)
	callback(0);
}


exports.dialog_623_32_0 = function(socket, id, hash) { //Кабкаб(гк1)
	redirectToDialog(socket, id, hash, 0, socket.session.actor.nickname);
}

exports.dialog_623_17_1 = function(socket, id, hash, callback) { //Кабкаб(гк1)
	callback(0);
}

exports.dialog_2360_32_0 = function(socket, id, hash) { //бродячий торговец эльтера
	redirectToDialog(socket, id, hash, 0, socket.session.actor.nickname);
}

exports.dialog_2360_81_1 = function(socket, id, hash, callback) { //бродячий торговец эльтера
	callback(0);
}


//======================================Ивент, Хе==================================================


exports.dialog_856_32_0 = function(socket, id, hash) { //Сумасшедший кролик
	redirectToDialog(socket, id, hash, 0, socket.session.actor.nickname);
}

exports.dialog_856_1_0 = function(socket, id, hash, callback) { //Сумасшедший кролик
	Dialog.changeItemsToBox(socket, [{item_id:4010,amount:1}], 9, id, hash, [98], 7, 4);
}

exports.dialog_856_2_0 = function(socket, id, hash, callback) { //Сумасшедший кролик
	Dialog.changeItemsToBox(socket, [{item_id:4010,amount:10}], 10, id, hash, [98], 7, 5);
}

exports.dialog_856_3_0 = function(socket, id, hash, callback) { //Сумасшедший кролик
	Dialog.changeItemsToBox(socket, [{item_id:4010,amount:100}], 11, id, hash, [98], 7, 6);
}


exports.dialog_1306_32_0 = function(socket, id, hash) { //Хё
	redirectToDialog(socket, id, hash, 0, socket.session.actor.nickname);
}

exports.dialog_1306_11_0 = function(socket, id, hash) { //Хё
	Dialog.changeItemsToItems(socket, [{item_id:6790,amount:1}], [{item_id:3862,amount:1,item_view:1}], id, hash, 30, 80, 31);
}

exports.dialog_1306_12_0 = function(socket, id, hash) { //Хё
	Dialog.changeItemsToItems(socket, [{item_id:6791,amount:1}], [{item_id:3876,amount:1,item_view:1}], id, hash, 30, 80, 31);
}

exports.dialog_1306_13_0 = function(socket, id, hash) { //Хё
	Dialog.changeItemsToItems(socket, [{item_id:6792,amount:1}], [{item_id:3890,amount:1,item_view:1}], id, hash, 30, 80, 31);
}

exports.dialog_1306_14_0 = function(socket, id, hash) { //Хё
	Dialog.changeItemsToItems(socket, [{item_id:6793,amount:1}], [{item_id:3904,amount:1,item_view:1}], id, hash, 30, 80, 31);
}

exports.dialog_1306_15_0 = function(socket, id, hash) { //Хё
	Dialog.changeItemsToItems(socket, [{item_id:6794,amount:1}], [{item_id:3918,amount:1,item_view:1}], id, hash, 30, 80, 31);
}

exports.dialog_1306_16_0 = function(socket, id, hash) { //Хё
	Dialog.changeItemsToItems(socket, [{item_id:6795,amount:1}], [{item_id:3932,amount:1,item_view:1}], id, hash, 30, 80, 31);
}

exports.dialog_1306_17_0 = function(socket, id, hash) { //Хё
	Dialog.changeItemsToItems(socket, [{item_id:6796,amount:1}], [{item_id:3946,amount:1,item_view:1}], id, hash, 30, 80, 31);
}

exports.dialog_1306_18_0 = function(socket, id, hash) { //Хё
	Dialog.changeItemsToItems(socket, [{item_id:6800,amount:1}], [{item_id:3738,amount:1,item_view:1}], id, hash, 30, 80, 31);
}

exports.dialog_1306_19_0 = function(socket, id, hash) { //Хё
	Dialog.changeItemsToItems(socket, [{item_id:6801,amount:1}], [{item_id:3752,amount:1,item_view:1}], id, hash, 30, 80, 31);
}

exports.dialog_1306_20_0 = function(socket, id, hash) { //Хё
	Dialog.changeItemsToItems(socket, [{item_id:6802,amount:1}], [{item_id:3766,amount:1,item_view:1}], id, hash, 30, 80, 31);
}

exports.dialog_1306_21_0 = function(socket, id, hash) { //Хё
	Dialog.changeItemsToItems(socket, [{item_id:6803,amount:1}], [{item_id:3780,amount:1,item_view:1}], id, hash, 30, 80, 31);
}

exports.dialog_1306_22_0 = function(socket, id, hash) { //Хё
	Dialog.changeItemsToItems(socket, [{item_id:6804,amount:1}], [{item_id:3794,amount:1,item_view:1}], id, hash, 30, 80, 31);
}

exports.dialog_1306_23_0 = function(socket, id, hash) { //Хё
	Dialog.changeItemsToItems(socket, [{item_id:6805,amount:1}], [{item_id:3808,amount:1,item_view:1}], id, hash, 30, 80, 31);
}

exports.dialog_1342_32_0 = function(socket, id, hash) { //Крафт точек
	redirectToDialog(socket, id, hash, 0, socket.session.actor.nickname);
}

exports.dialog_1342_1_0 = function(socket, id, hash) { //Крафт точек(Усиленные)
	Dialog.changeItemsToItems(socket, [{item_id:351,amount:9,item_view:1},{item_id:351,amount:4,item_view:2},{item_id:3498,amount:3,item_view:1},{item_id:409,amount:300000,item_view:1}], [{item_id:6934,amount:1,item_view:1}], id, hash, 19, 18, 11);
}

exports.dialog_1342_2_0 = function(socket, id, hash) { //Крафт точек(Усиленные)
	Dialog.changeItemsToItems(socket, [{item_id:353,amount:9,item_view:1},{item_id:353,amount:4,item_view:2},{item_id:3499,amount:3,item_view:1},{item_id:409,amount:200000,item_view:1}], [{item_id:6935,amount:1,item_view:1}], id, hash, 19, 18, 12);
}

exports.dialog_1342_3_0 = function(socket, id, hash) { //Крафт точек(Блестящие)
	Dialog.changeItemsToItems(socket, [{item_id:351,amount:7,item_view:1},{item_id:351,amount:3,item_view:2},{item_id:3498,amount:2,item_view:1},{item_id:409,amount:100000,item_view:1}], [{item_id:6932,amount:1,item_view:1}], id, hash, 19, 18, 13);
}

exports.dialog_1342_4_0 = function(socket, id, hash) { //Крафт точек(Блестящие)
	Dialog.changeItemsToItems(socket, [{item_id:353,amount:7,item_view:1},{item_id:353,amount:3,item_view:2},{item_id:3499,amount:2,item_view:1},{item_id:409,amount:60000,item_view:1}], [{item_id:6933,amount:1,item_view:1}], id, hash, 19, 18, 14);
}

exports.dialog_1342_5_0 = function(socket, id, hash) { //Крафт точек(Сияющие)
	Dialog.changeItemsToItems(socket, [{item_id:351,amount:5,item_view:1},{item_id:351,amount:2,item_view:2},{item_id:3498,amount:1,item_view:1},{item_id:409,amount:50000,item_view:1}], [{item_id:3500,amount:1,item_view:1}], id, hash, 19, 18, 15);
}

exports.dialog_1342_6_0 = function(socket, id, hash) { //Крафт точек(Сияющие)
	Dialog.changeItemsToItems(socket, [{item_id:353,amount:5,item_view:1},{item_id:353,amount:2,item_view:2},{item_id:3499,amount:1,item_view:1},{item_id:409,amount:30000,item_view:1}], [{item_id:3501,amount:1,item_view:1}], id, hash, 19, 18, 16);
}




//КВЕСТЫ
exports.dialog_165_32_0 = function(socket, id, hash) { //Клик по Харт
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 2, isAccept: false}) != -1) { //Дополнить - открыть диалог для сдачи, если квест взят
		//TODO
		return;
	} else {
		redirectToDialog(socket, id, hash, 0, socket.session.actor.nickname);
	}
}
exports.dialog_165_1_0 = function(socket, id, hash) { //Доспех Харта Кримсона (1,2,3,4,5,6)
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 2, isAccept: true, anotherRedirectId: 77, isCompleteButton: true, completeRedirectId: 77}) != -1) {
		//TODO
		return;
	}
}
exports.dialog_240_32_0 = function(socket, id, hash) { //Клик по Орк-кузнец
	var anotherRedirectId = 12;
	if (socket.session.actor.questIsAccepted(47)){
		anotherRedirectId = 0;
	}
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 2, isAccept: false, anotherRedirectId: anotherRedirectId}) != -1) { //Дополнить - открыть диалог для сдачи, если квест взят
		//TODO
		return;
	} else {
		redirectToDialog(socket, id, hash, 12, socket.session.actor.nickname);
	}
}
exports.dialog_240_1_0 = function(socket, id, hash) { //Доспех Харта Кримсона (7)
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 2, isAccept: true, isCompleteButton: true, universalButton: true, completeRedirectId: 3}) != -1) {
		//TODO
		return;
	}
}


exports.dialog_321_32_0 = function(socket, id, hash) { //Клик по <Стражник>/nШелби
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 56, isAccept: false, anotherRedirectId: 1}) != -1) { //Дополнить - открыть диалог для сдачи, если квест взят
		//
		return;
	} else {
		redirectToDialog(socket, id, hash, 3, socket.session.actor.nickname);
	}
}
exports.dialog_321_10_0 = function(socket, id, hash) { //Меч дракона
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 56, isAccept: false, completeRedirectId: 200, isCompleteButton: true}) != -1) {
		//TODO
		return;
	}
}
exports.dialog_321_1_0 = function(socket, id, hash) { //Меч дракона
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 56, isAccept: true, anotherRedirectId: 200, isCompleteButton: false}) != -1) {
		//TODO
		return;
	}
}



exports.dialog_622_1_0 = function(socket, id, hash) { //Клик по Файрон (Спросить о печате Ифрита)
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 85, isAccept: false}) != -1) { //Дополнить - открыть диалог для сдачи, если квест взят
		//TODO
		return;
	} else {
		redirectToDialog(socket, id, hash, 99, socket.session.actor.nickname);
	}
}

exports.dialog_622_2_0 = function(socket, id, hash) { //Печать Ифрита
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 85, isAccept: true, anotherRedirectId: 1, isCompleteButton: true, completeRedirectId: 5}) != -1) {
		//TODO
		return;
	}
}


exports.dialog_311_32_0 = function(socket, id, hash) { //Клик по Олленберг
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 85, isAccept: false, startQuestDialogId: 0}) != -1) { //Дополнить - открыть диалог для сдачи, если квест взят
		//
		return;
	}
}
exports.dialog_311_1_0 = function(socket, id, hash) { //Тревога Олленберга
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 85, isAccept: false}) != -1) {
		//TODO
		return;
	} else {
		redirectToDialog(socket, id, hash, 2, socket.session.actor.nickname);
	}
}
exports.dialog_311_2_0 = function(socket, id, hash) { //Тревога Олленберга
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 85, isAccept: true, isCompleteButton: true, anotherRedirectId: 2, universalButton: true}) != -1) {
		//TODO
		return;
	}
}


exports.dialog_814_32_0 = function(socket, id, hash) { //Клик по <Мастер печати>/nВандер
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 85, isAccept: false, startQuestDialogId: 0}) != -1) { //Дополнить - открыть диалог для сдачи, если квест взят
		//
		return;
	}
}
exports.dialog_814_1_0 = function(socket, id, hash) { //Испытание
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 85, isAccept: false}) != -1) {
		//TODO
		return;
	} else {
		redirectToDialog(socket, id, hash, 2, socket.session.actor.nickname);
	}
}
exports.dialog_814_2_0 = function(socket, id, hash) { //Испытание
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 85, isAccept: true, isCompleteButton: true, completeRedirectId: 4}) != -1) {
		//TODO
		return;
	}
}
exports.dialog_814_3_0 = function(socket, id, hash) { //Испытание
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 85, isAccept: true, isCompleteButton: true, completeRedirectId: 5}) != -1) {
		//TODO
		return;
	}
}
exports.dialog_814_4_0 = function(socket, id, hash) { //Испытание
	redirectToDialog(socket, id, hash, 3, socket.session.actor.nickname);
}
exports.dialog_814_6_0 = function(socket, id, hash) { //Испытание
	//TODO Вход на Ифрита
}

exports.dialog_135_32_0 = function(socket, id, hash) {// Клик по <Управляющий Гильдиями>/nБрендон
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 90, isAccept: false}) != -1) {
		return;
	} else {
		redirectToDialog(socket, id, hash, 0, socket.session.actor.nickname);
	}
}
exports.dialog_135_2_0 = function(socket, id, hash) { //Подготовка к бою
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 90, isAccept: true, anotherRedirectId: 12, isCompleteButton: true, completeRedirectId: 11}) != -1) {
		//TODO
		return;
	}
}

exports.dialog_160_32_0 = function(socket, id, hash) {// Клик по <Кузнец>/nРосс
	var anotherRedirectId = 0;
	if (socket.session.actor.questIsAccepted(92)){
		anotherRedirectId = 10;
	}
	if (socket.session.actor.questIsAccepted(93)){
		anotherRedirectId = 13;
	}
	if (socket.session.actor.questIsAccepted(94)){
		anotherRedirectId = 16;
	}
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 92, isAccept: false, anotherRedirectId: anotherRedirectId}) != -1) {
		return;
	} else {
		redirectToDialog(socket, id, hash, 0, socket.session.actor.nickname);
	}
}
exports.dialog_160_10_0 = function(socket, id, hash) { //Навестить Росса
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 92, isAccept: false, isCompleteButton: true, completeRedirectId: 11}) != -1) {
		//TODO
		return;
	}
}
exports.dialog_160_12_0 = function(socket, id, hash) { //Неугасимая искра
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 92, isAccept: true, anotherRedirectId: 53}) != -1) {
		//TODO
		return;
	}
}
exports.dialog_160_13_0 = function(socket, id, hash) { //Навестить Росса
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 92, isAccept: false, isCompleteButton: true, completeRedirectId: 15}) != -1) {
		//TODO
		return;
	}
}
exports.dialog_160_16_0 = function(socket, id, hash) { //Неугасимая искра
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 92, isAccept: true, anotherRedirectId: 16}) != -1) {
		//TODO
		return;
	}
}
exports.dialog_600_32_0 = function(socket, id, hash) {// Клик по Кузнец>/nРентмен
	var anotherRedirectId = 0;
	if (socket.session.actor.questIsAccepted(95)){
		anotherRedirectId = 13;
	}
	if (socket.session.actor.questIsAccepted(96)){
		anotherRedirectId = 21;
	}
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 92, isAccept: false, anotherRedirectId: anotherRedirectId}) != -1) {
		return;
	} else {
		redirectToDialog(socket, id, hash, 0, socket.session.actor.nickname);
	}
}
exports.dialog_600_10_0 = function(socket, id, hash) { //Навестить Росса
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 92, isAccept: false, completeRedirectId: 14, isCompleteButton: true}) != -1) {
		//TODO
		return;
	}
}
exports.dialog_600_21_0 = function(socket, id, hash) { //Навестить Росса
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 92, isAccept: true, anotherRedirectId: 21}) != -1) {
		//TODO
		return;
	}
}
exports.dialog_816_32_0 = function(socket, id, hash) {// Клик по Жена кузнеца
	var anotherRedirectId = 0;
	if (socket.session.actor.questIsAccepted(96)){
		anotherRedirectId = 1;
	}
	if (socket.session.actor.questIsAccepted(97)){
		anotherRedirectId = 3;
	}
	if (socket.session.actor.questIsAccepted(98)){
		anotherRedirectId = 7;
	}
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 92, isAccept: false, anotherRedirectId: anotherRedirectId}) != -1) { //QTODO
		return;
	} else {
		redirectToDialog(socket, id, hash, 0, socket.session.actor.nickname);
	}
}
exports.dialog_816_1_0 = function(socket, id, hash) { //Навестить Росса
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 92, isAccept: false, completeRedirectId: 2, isCompleteButton: true}) != -1) {
		//TODO
		return;
	}
}
exports.dialog_816_2_0 = function(socket, id, hash) { //Навестить Росса
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 92, isAccept: true, anotherRedirectId: 3}) != -1) {
		//TODO
		return;
	}
}
exports.dialog_816_3_0 = function(socket, id, hash) { //Навестить Росса
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 92, isAccept: false, completeRedirectId: 4, isCompleteButton: true}) != -1) {
		//TODO
		return;
	}
}
exports.dialog_816_4_0 = function(socket, id, hash) { //Навестить Росса
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 92, isAccept: true, anotherRedirectId: 6}) != -1) {
		//TODO
		return;
	}
}
exports.dialog_816_5_0 = function(socket, id, hash) { //Навестить Росса
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 92, isAccept: false, completeRedirectId: 8, isCompleteButton: true}) != -1) {
		//TODO
		return;
	}
}
exports.dialog_570_32_0 = function(socket, id, hash) {// Клик по <Стражник>/nФончак
	var anotherRedirectId = 0;
	if (socket.session.actor.questIsAccepted(92)){
		anotherRedirectId = 3;
	}
	if (socket.session.actor.questIsAccepted(94)){
		anotherRedirectId = 10;
	}
	if (socket.session.actor.questIsAccepted(95)){
		anotherRedirectId = 21;
	}
	if (socket.session.actor.questIsAccepted(99)){
		anotherRedirectId = 32;
	}
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 92, isAccept: false, anotherRedirectId: anotherRedirectId}) != -1) { //QTODO
		return;
	} else {
		redirectToDialog(socket, id, hash, 0, socket.session.actor.nickname);
	}
}
exports.dialog_570_1_0 = function(socket, id, hash) { //Навестить Росса
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 92, isAccept: true, anotherRedirectId: 3}) != -1) {
		//TODO
		return;
	}
}
exports.dialog_570_11_0 = function(socket, id, hash) { //Навестить Росса
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 92, isAccept: false, completeRedirectId: 20, isCompleteButton: true}) != -1) {
		//TODO
		return;
	}
}
exports.dialog_570_21_0 = function(socket, id, hash) { //Навестить Росса
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 92, isAccept: true, anotherRedirectId: 21}) != -1) {
		//TODO
		return;
	}
}
exports.dialog_570_71_0 = function(socket, id, hash) { //Навестить Росса
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 92, isAccept: true, anotherRedirectId: 32}) != -1) {
		//TODO
		return;
	}
}
exports.dialog_570_33_0 = function(socket, id, hash) { //Навестить Росса
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 92, isAccept: false, completeRedirectId: 33, isCompleteButton: true}) != -1) {
		//TODO
		return;
	}
}

exports.dialog_677_32_0 = function(socket, id, hash) {// Клик по <Стражник>/nДжин
	var anotherRedirectId = 0;
	if (socket.session.actor.questIsAccepted(111)){
		anotherRedirectId = 4;
	}
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 111, isAccept: false, anotherRedirectId: anotherRedirectId}) != -1) { //QTODO
		return;
	} else {
		redirectToDialog(socket, id, hash, 0, socket.session.actor.nickname);
	}
}
exports.dialog_677_1_0 = function(socket, id, hash) { //Поручение Джина
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 111, isAccept: true, anotherRedirectId: 4}) != -1) {
		//TODO
		return;
	}
}
exports.dialog_677_2_0 = function(socket, id, hash) { //Поручение Джина
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 111, isAccept: false, isCompleteButton: true}) != -1) {
		//TODO
		return;
	}
}

exports.dialog_756_32_0 = function(socket, id, hash) {// Клик по Рид
	var anotherRedirectId = 0;
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 112, isAccept: false, anotherRedirectId: anotherRedirectId}) != -1) { //QTODO
		return;
	} else {
		redirectToDialog(socket, id, hash, 0, socket.session.actor.nickname);
	}
}
exports.dialog_756_1_0 = function(socket, id, hash) { //Небесное ожерелье
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 112, isAccept: true, anotherRedirectId: 4}) != -1) {
		//TODO
		return;
	}
}
exports.dialog_756_2_0 = function(socket, id, hash) { //Небесное ожерелье
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 112, isAccept: false, isCompleteButton: true}) != -1) {
		//TODO
		return;
	}
}
exports.dialog_756_3_0 = function(socket, id, hash) { //Небесное ожерелье
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 112, isAccept: false, isCompleteButton: true}) != -1) {
		//TODO
		return;
	}
}

exports.dialog_754_32_0 = function(socket, id, hash) {// Клик по Кандару
	var anotherRedirectId = 0;
	if (socket.session.actor.questIsAccepted(113)){
		anotherRedirectId = 3;
	}
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 113, isAccept: false, anotherRedirectId: anotherRedirectId}) != -1) { //QTODO
		return;
	} else {
		redirectToDialog(socket, id, hash, 0, socket.session.actor.nickname);
	}
}
exports.dialog_754_1_0 = function(socket, id, hash) { //Новые доспехи
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 113, isAccept: true, anotherRedirectId: 3}) != -1) {
		//TODO
		return;
	}
}
exports.dialog_754_2_0 = function(socket, id, hash) { //Новые доспехи
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 113, isAccept: false, isCompleteButton: true}) != -1) {
		//TODO
		return;
	}
}

exports.dialog_758_32_0 = function(socket, id, hash) {// Клик по <Стражник>/nДару
	var anotherRedirectId = 0;
	if (socket.session.actor.questIsAccepted(114)){
		anotherRedirectId = 3;
	}
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 113, isAccept: false, anotherRedirectId: anotherRedirectId}) != -1) { //QTODO
		return;
	} else {
		redirectToDialog(socket, id, hash, 0, socket.session.actor.nickname);
	}
}
exports.dialog_758_1_0 = function(socket, id, hash) { //Усиление доспеха
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 113, isAccept: true, anotherRedirectId: 3}) != -1) {
		//TODO
		return;
	}
}
exports.dialog_758_2_0 = function(socket, id, hash) { //Усиление доспеха
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 113, isAccept: false, isCompleteButton: true}) != -1) {
		//TODO
		return;
	}
}

exports.dialog_760_32_0 = function(socket, id, hash) {// Клик по <Стражник>/nКой
	var anotherRedirectId = 0;
	if (socket.session.actor.questIsAccepted(115)){
		anotherRedirectId = 3;
	}
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 113, isAccept: false, anotherRedirectId: anotherRedirectId}) != -1) { //QTODO
		return;
	} else {
		redirectToDialog(socket, id, hash, 0, socket.session.actor.nickname);
	}
}
exports.dialog_760_1_0 = function(socket, id, hash) { //Последнее преобразование
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 113, isAccept: true, anotherRedirectId: 3}) != -1) {
		//TODO
		return;
	}
}
exports.dialog_760_2_0 = function(socket, id, hash) { //Последнее преобразование
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 113, isAccept: false, isCompleteButton: true}) != -1) {
		//TODO
		return;
	}
}

exports.dialog_953_32_0 = function(socket, id, hash) {// Клик по <Великий Мастер>/nШин
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 116, isAccept: false, anotherRedirectId: 1, startQuestDialogId: 1}) != -1) {
		//
	} else {
		if (socket.session.actor.level < 50) {
			redirectToDialog(socket, id, hash, 0, socket.session.actor.nickname);
		} else {
			redirectToDialog(socket, id, hash, 85, socket.session.actor.nickname);
		}
	}
}
exports.dialog_953_1_0 = function(socket, id, hash) { //Навестить Росса
	if (socket.session.actor.class != 0){
		redirectToDialog(socket, id, hash, 99, socket.session.actor.nickname);
		return; 
	}
	if (socket.session.actor.questIsAccepted(116)){
		if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 116, isAccept: false, anotherRedirectId: 10}) != -1) { //QTODO
			return;
		}
	}
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 116, isAccept: true, anotherRedirectId: 10}) != -1) {
		//TODO
		return;
	}
}
exports.dialog_953_11_0 = function(socket, id, hash) { //Последнее преобразование
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 116, isAccept: false, isCompleteButton: true}) != -1) {
		//TODO
		return;
	}
}











exports.dialog_1028_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 120, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_1029_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 120, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_1049_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 120, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_1052_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 120, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_1049_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 134, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_1036_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 134, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_1291_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 160, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_1292_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 164, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_1293_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 168, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_1295_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 170, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_1451_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 188, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_1452_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 191, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_1453_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 191, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_1454_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 191, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_1454_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 199, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_1457_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 201, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_1458_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 201, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_1459_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 206, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_1461_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 207, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_1462_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 207, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_1463_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 213, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_1464_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 214, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_1465_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 214, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_1466_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 218, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_1468_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 219, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_1470_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 220, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_1479_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 220, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_1471_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 224, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_1474_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 224, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_1476_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 224, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_1479_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 229, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_1481_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 233, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_1482_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 233, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_1483_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 239, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_1484_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 241, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_1487_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 244, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_1485_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 245, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_1456_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 249, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_1462_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 250, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_1710_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 301, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_1711_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 302, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_1712_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 303, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_1713_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 304, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_1696_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 311, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_1703_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 312, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_1705_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 314, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_1701_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 315, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_1706_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 316, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_1700_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 318, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_1702_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 319, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_1699_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 320, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_1709_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 321, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_1704_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 322, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_1708_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 323, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_1707_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 324, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_1698_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 325, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_1720_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 331, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_1720_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 332, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_1721_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 333, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_1721_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 334, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_1722_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 335, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_1722_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 336, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_1723_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 337, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_1723_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 338, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_680_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 382, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_1741_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 386, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_1741_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 388, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_1742_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 389, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_1742_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 391, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_1743_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 392, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_1743_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 393, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_1744_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 394, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_1744_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 395, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_1745_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 396, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_1745_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 397, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_1746_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 398, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_1746_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 399, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_1291_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 400, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_1292_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 401, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_1293_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 402, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_1749_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 403, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_1749_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 405, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_1307_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 406, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_1307_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 409, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_1297_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 410, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_1297_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 412, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_1296_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 413, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_1296_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 417, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_1750_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 418, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_1750_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 420, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_1747_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 421, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_1747_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 424, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_1748_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 425, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_1748_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 428, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_1489_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 430, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_1489_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 431, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_1490_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 432, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_1490_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 433, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_1782_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 436, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_1783_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 436, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_1784_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 438, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_1785_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 438, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_1786_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 440, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_1787_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 440, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_1788_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 440, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_1789_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 440, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_1790_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 444, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_1791_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 444, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_1792_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 444, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_1793_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 447, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_1794_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 447, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_1795_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 447, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_1796_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 450, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_1797_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 450, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_2805_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 452, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_2805_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 453, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_1819_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 467, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_1820_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 468, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_1821_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 469, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_1866_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 470, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_1813_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 471, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_1814_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 474, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_1815_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 477, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_264_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 481, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_279_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 481, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_288_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 487, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_297_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 487, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_294_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 487, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_678_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 494, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_675_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 494, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_750_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 501, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_751_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 501, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_708_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 509, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_626_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 509, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_707_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 514, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_275_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 514, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_623_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 514, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_624_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 522, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_625_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 522, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_948_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 527, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_766_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 527, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_1818_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 533, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_1891_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 534, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_1892_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 535, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_1893_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 536, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_425_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 540, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_2012_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 540, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_1719_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 547, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_1835_10_0 = function(socket, id, hash) {
	var anotherRedirectId = 0;
	var startQuestDialogId = 0;
	var questId = socket.session.actor.CheckQuestForAccept(552);
	if (socket.session.actor.questIsAccepted(552) || questId == 552){
		anotherRedirectId = 12;
		startQuestDialogId = 10;
	}
	if (socket.session.actor.questIsAccepted(553) || questId == 553){
		anotherRedirectId = 22;
		startQuestDialogId = 20;
	}
	if (socket.session.actor.questIsAccepted(554) || questId == 554){
		anotherRedirectId = 33;
		startQuestDialogId = 30;
	}
	if (socket.session.actor.questIsAccepted(555) || questId == 555){
		anotherRedirectId = 42;
		startQuestDialogId = 40;
	}
	if (socket.session.actor.questIsAccepted(556) || questId == 556){
		anotherRedirectId = 52;
		startQuestDialogId = 50;
	}
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 552, isAccept: false, anotherRedirectId: anotherRedirectId, startQuestDialogId: startQuestDialogId}) != -1) { //QTODO
		return;
	} else {
		//TODO LEVEL/COMPLETE
	}
}
exports.dialog_1835_11_0 = function(socket, id, hash) {
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 552, isAccept: true, anotherRedirectId: 12}) != -1) {
		//TODO
		return;
	}
}
exports.dialog_1835_21_0 = function(socket, id, hash) {
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 552, isAccept: true, anotherRedirectId: 22}) != -1) {
		//TODO
		return;
	}
}
exports.dialog_1835_31_0 = function(socket, id, hash) {
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 552, isAccept: true, anotherRedirectId: 33}) != -1) {
		//TODO
		return;
	}
}
exports.dialog_1835_41_0 = function(socket, id, hash) {
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 552, isAccept: true, anotherRedirectId: 42}) != -1) {
		//TODO
		return;
	}
}
exports.dialog_1835_51_0 = function(socket, id, hash) {
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 552, isAccept: true, anotherRedirectId: 52}) != -1) {
		//TODO
		return;
	}
}
exports.dialog_1835_12_0 = function(socket, id, hash) {
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 552, isAccept: false, completeRedirectId: 13, isCompleteButton: true, unCompleteId: 66}) != -1) {
		//TODO
		return;
	}
}
exports.dialog_1835_22_0 = function(socket, id, hash) {
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 552, isAccept: false, completeRedirectId: 23, isCompleteButton: true, unCompleteId: 66}) != -1) {
		//TODO
		return;
	}
}
exports.dialog_1835_33_0 = function(socket, id, hash) {
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 552, isAccept: false, completeRedirectId: 34, isCompleteButton: true, unCompleteId: 66}) != -1) {
		//TODO
		return;
	}
}
exports.dialog_1835_42_0 = function(socket, id, hash) {
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 552, isAccept: false, completeRedirectId: 43, isCompleteButton: true, unCompleteId: 66}) != -1) {
		//TODO
		return;
	}
}
exports.dialog_1835_52_0 = function(socket, id, hash) {
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 552, isAccept: false, completeRedirectId: 53, isCompleteButton: true, unCompleteId: 66}) != -1) {
		//TODO
		return;
	}
}
exports.dialog_2013_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 557, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_2014_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 557, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_2024_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 562, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_2030_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 565, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_2025_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 568, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_2026_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 569, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_2027_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 570, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_2028_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 571, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_2031_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 572, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_2032_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 573, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_2033_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 574, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_2034_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 575, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_162_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 576, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_376_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 578, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_375_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 578, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_352_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 578, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_350_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 578, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_349_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 578, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_382_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 578, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_378_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 578, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_343_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 578, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_381_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 578, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_384_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 578, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_374_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 578, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_339_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 578, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_341_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 578, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_383_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 578, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_379_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 578, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_353_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 578, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_345_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 578, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_387_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 578, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_351_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 578, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_340_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 578, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_372_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 578, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_386_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 578, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_338_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 578, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_338_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 602, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_1039_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 603, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_1045_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 603, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_1046_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 603, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_1044_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 603, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_1027_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 603, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_1030_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 603, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_1035_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 603, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_1041_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 603, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_1042_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 603, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_1076_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 603, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_1043_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 613, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_717_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 614, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_375_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 614, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_375_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 616, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_375_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 617, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_382_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 617, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_378_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 617, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_343_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 617, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_352_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 617, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_350_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 617, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_2066_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 623, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_2064_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 623, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_2064_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 627, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_341_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 627, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_383_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 627, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_379_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 627, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_2064_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 631, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_384_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 631, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_374_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 631, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_2067_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 634, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_2065_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 634, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_2065_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 638, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_340_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 638, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_372_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 638, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_386_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 638, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_2065_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 642, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_345_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 642, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_387_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 642, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_1039_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 642, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_1045_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 642, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_1046_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 647, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_1035_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 647, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_1041_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 647, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_1042_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 647, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_1076_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 647, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_1046_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 652, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_1044_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 652, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_1027_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 652, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_2061_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 655, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_2062_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 656, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_2063_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 657, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_2081_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 658, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_2082_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 658, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_2082_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 660, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_2084_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 661, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_765_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 662, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_668_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 662, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_155_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 662, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_166_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 662, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_1751_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 662, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_2092_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 662, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_1752_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 662, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_2093_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 662, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_1753_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 662, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_2094_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 662, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_1754_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 662, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_2096_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 680, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_2097_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 680, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_2098_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 684, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_2099_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 684, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_2085_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 684, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_2085_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 689, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_2083_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 690, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_2086_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 691, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_2095_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 692, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_1756_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 692, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_2106_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 692, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_2107_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 692, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_1758_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 692, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_1757_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 692, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_1759_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 692, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_2108_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 692, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_1755_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 692, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_1762_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 712, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_1763_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 712, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_2109_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 712, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_2110_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 712, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_1764_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 712, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_2112_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 712, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_2111_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 712, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_1765_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 712, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_761_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 729, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_1766_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 729, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_1772_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 729, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_2113_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 729, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_1769_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 729, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_2114_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 729, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_1770_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 729, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_2115_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 729, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_2116_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 729, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_2117_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 729, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_1722_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 746, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_2124_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 747, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_2125_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 747, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_2126_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 751, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_2127_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 751, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_2118_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 755, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_2119_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 755, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_2119_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 757, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_2121_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 758, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_2122_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 758, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_2122_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 760, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_2120_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 761, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_2123_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 762, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_2128_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 763, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_2129_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 763, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_2130_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 763, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_2132_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 770, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_2131_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 770, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_2133_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 777, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_2134_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 777, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_2135_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 777, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_2136_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 785, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_2137_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 785, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_2137_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 790, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_2138_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 791, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_2139_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 791, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_2139_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 796, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_2231_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 797, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_2232_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 797, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_2233_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 797, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_2234_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 797, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_2235_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 797, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_2231_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 807, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_2236_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 807, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_2237_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 807, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_2238_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 807, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_2239_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 807, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_2231_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 815, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_2240_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 815, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_2241_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 815, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_2242_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 815, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_2243_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 815, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_2244_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 823, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_2245_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 824, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_2246_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 825, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_2247_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 826, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_2248_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 827, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_2249_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 828, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_2250_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 829, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_2251_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 830, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_2314_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 831, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_2474_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 832, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_2475_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 832, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_2475_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 834, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_2476_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 835, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_2477_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 836, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_2478_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 836, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_2479_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 840, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_2480_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 840, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_2481_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 844, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_2482_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 844, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_2483_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 844, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_2484_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 844, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_2485_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 844, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_2486_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 844, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_2579_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 856, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_2607_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 857, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_2608_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 858, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_2609_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 858, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_2608_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 864, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_2579_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 865, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_2625_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 866, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_2624_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 871, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_2682_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 876, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_2683_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 881, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_2683_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 882, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_2683_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 883, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_2683_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 884, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_2683_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 885, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_2683_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 886, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_2684_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 887, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_2685_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 892, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_2685_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 893, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_2685_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 894, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_2685_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 895, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_2685_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 896, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_2685_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 897, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_2690_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 898, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_2857_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 899, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_1691_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 900, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_1691_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 901, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_1691_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 902, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_1692_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 903, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_1692_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 904, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_1693_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 905, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_1694_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 906, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_1694_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 907, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_1692_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 908, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_1692_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 909, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_2105_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 910, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_2105_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 911, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_2105_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 912, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_2105_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 913, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_2105_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 914, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_2691_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 1000, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_2748_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 1005, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_2870_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 1006, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_0_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 1007, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}
exports.dialog_0_32_0 = function(socket, id, hash) {// Клик по ВЫФВФЫВФЫВЫФ
	if (Dialog.getQuest({socket: socket, id: id, hash: hash, globalId: 1008, isAccept: false, startQuestDialogId: 0}) != -1) { //QTODO
		return;
	}
}


/*===============================================================================================*/

exports.dialog_1291_32_0 = function(socket, id, hash) { //ПВ
	if (Dialog.getQuest(socket, id, hash, 400, false, 53/*, 52   ID диалога для сдачи квеста*/) != -1) {
		//TODO
		return;
	}
	if (Dialog.getQuest(socket, id, hash, 160, false) != -1) {
		//TODO
		return;
	}
}

exports.dialog_1291_15_0 = function(socket, id, hash) { //ПВ
	if (Dialog.getQuest(socket, id, hash, 400, true, 52/*, 5   ID диалога после принятия квеста*/) != -1) {
		//TODO
		return;
	}
}




//КВЕСТЫ

exports.dialog_1720_2_0 = function(socket, id, hash) { //Илюмка эпик
	var questId = socket.session.actor.CheckQuestForAccept(null, 331);
	if (questId != -1) { //Может взять
		//TODO проверка вес, ячейки

		//Принятие квеста
		var packet = Buffer.alloc(14);
		packet.writeUInt32LE(331, 6);
		packet[10] = 0x00;
		sendPacket(socket, packet, 5460, false);
	} else {
		//error
	}
}

exports.dialog_1720_1_0 = function(socket, id, hash) { //Илюмка эпик
	var questId = socket.session.actor.CheckQuestForAccept(331, null);
	if (questId != -1) { //Может взять
		redirectToDialog(socket, id, hash, quests[questId].open_text, socket.session.actor.nickname);
	} else {
		//error
	}
}

module.exports.redirectToDialog = redirectToDialog;