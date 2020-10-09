const d = require('../utils/data')

module.exports = discriminator => {
	d.store(discriminator, {
		title: "Normie player",
		profile: {
			level: 1,
			exp: 0,
			area: 1,
			max_area: 1,
		},
		stats: {
			attack: 1,
			defense: 1,
			hp: 100,
			max_hp: 100,
			coins: 100,
			epic_coins: 0,
			bank: {},
		},
		equipment: {
			sword: {icon:"", enchantment:0},
			armor: {icon:"", enchantment:0},
		},
		horse: {},
		time_travels: 0,
		inventory: {},
		professions: {
			worker: {level:1,exp:0,max_exp:100},
			crafter: {level:1,exp:0,max_exp:100},
			lootboxer: {level:1,exp:0,max_exp:100},
			merchant: {level:1,exp:0,max_exp:100},
			enchanter: {level:1,exp:0,max_exp:100},
		},
	})
}