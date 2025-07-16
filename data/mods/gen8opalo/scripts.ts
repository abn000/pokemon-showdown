export const Scripts: ModdedBattleScriptsData = {
	gen: 8,
	inherit: 'gen8',
	side: {
		inherit: true,
		canDynamaxNow() {
			// Disable Dynamaxing in this mod
			return false;
		},
	},
};
