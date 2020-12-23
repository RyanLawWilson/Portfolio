console.log("test");
function Minotaur() {
	// Random numbers that are added to stats to make each entity more unique.
	let statVariance1 = Math.floor((Math.random() - 0.5) * 6);
	let statVariance2 = Math.floor((Math.random() - 0.5) * 6);
	let healthVariance = Math.floor((Math.random() - 0.5) * 30);

	this.profile = new Profile(
		entityName = "Minotaur"
	);

	this.stats = new Statistics(
		attackDamage = 20 + statVariance1,
		magicDamage = 0,
		attackDefense = 30 + statVariance2,
		magicDefense = 5 + statVariance1,
		attackSpeed = 10 + statVariance2,
		movementSpeed = 20 + statVariance1,
		health = 100 + healthVariance
	);

	this.attacks = [
		// Basic Attack
		new AttackMove(
			attackName = "Chop",
			castTime = 1,
			attackDamageMultiplier = 1,
			attackSpeed = 2
		),

		// Special Move
		new AttackMove(
			attackName = "Charge!",
			castTime = 2,
			attackSpeed = 3,
			attackDamageMultiplier = 1.2,
			attackDefenseMultiplier = 0.75,
			movementSpeedMultiplier = 1.5,
			attackSpeedMultiplier = 0.5
		),

		// Defense Move
		new AttackMove(
			attackName = "Block",
		),
	];
}

// Entities have stats
function Statistics(atkDam, magDam, atkDef, magDef, atkSpd, movSpd, hp) {
	this.attackDamage = atkDam;
	this.magicDamage = magDam;
	this.attackDefense = atkDef;
	this.magicDefense = magDef;
	this.attackSpeed = atkSpd;
	this.movementSpeed = movSpd;
	this.health = hp;
}

// Info about the entity (name, )
function Profile(entityName) {
	this.entityName = entityName;
}

// Numbers that are below 1 reduce the entity's stat value.  A multiplier of 1 doesn't change the stat.
function AttackMove(atkName, lag, castTime, projSpd, atkDamMul, magDamMul, atkDefMul, magDefMul, atkSpdMul, movSpdMul) {
	this.attackName = atkName; // The name of the attack
	this.endLag = lag; // the time it takes to start a new attack.
	this.castTime = castTime;
	this.projectileSpeed = projSpd;	// 0 indicates that it's not a projectile
	this.attackDamageMultiplier = atkDamMul;
	this.magicDamageMultiplier = magDamMul;
	this.attackDefenseMultiplier = atkDefMul;
	this.magicDefenseMultiplier = magDefMul;
	this.attackSpeedMultiplier = atkSpdMul;
	this.movementSpeedMultiplier = movSpdMul;
}

const m = new Minotaur();
console.log(`${m.profile.entityName}: ${m.stats.attackDamage}`);

$(function() {
	var canvas = document.getElementById("game-canvas");
	canvas.width = `${window.innerWidth}`;
	canvas.height = `${window.innerHeight}`;

    var context = canvas.getContext("2d");
	var player = document.getElementById("player");
	context.drawImage(player, 10, 10);


	// Resize support.  Every time the screen is resized, the canvas is drawn again
	// which removes all of the drawings.
	$(window).resize(() => {
		console.log("Resized");
		canvas.width = `${window.innerWidth}`;
		canvas.height = `${window.innerHeight}`;
		context.drawImage(player, 10, 10);
	});
});



