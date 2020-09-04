function Housekeeper(name, age, yearsOfExperience, cleaningRepertoire) {
	this.name = name;
	this.age = age;
	this.yearsOfExperience = yearsOfExperience;
	this.cleaningRepertoire = cleaningRepertoire;
	this.clean = function () {
		alert("Cleaning in progress...");
	};
}

var housekeeper1 = new Housekeeper("Sonia", 45, 12, ["bathroom", "lobby", "bedroom"]);

housekeeper1.clean();