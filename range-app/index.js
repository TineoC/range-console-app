import Range from "range-kata-class";
import PromptSync from "prompt-sync";

const prompt = PromptSync();

var ranges = [];

const pressAnyKeyToContinue = () => {
	prompt("Press Any Key to continue...");
};

const PrintRanges = () => {
	if (!ranges.length) {
		console.log(`Ranges list is empty`);
	} else {
		console.log("Ranges List: ");
		ranges.map((range, index) => {
			console.log(`${index + 1}. ${range.input}`);
		});
	}
};

const MenuSwitch = (operation) => {
	console.clear();
	switch (operation) {
		case "1":
			CreateRange();
			break;

		case "2":
			ShowRanges();
			break;

		case "3":
			DeleteRange();
			break;

		case "4":
			RangeEquals();
			break;

		case "5":
			RangeOverlaps();
			break;

		case "6":
			RangeContains();
			break;

		case "7":
			RangeAllPoints();
			break;

		case "Exit":
			process.exit(0);

		default:
			process.exit(0);
	}
};

const Menu = () => {
	console.log("1. Create");
	console.log("2. Show");
	console.log("3. Delete");
	console.log("4. Equals");
	console.log("5. Overlaps");
	console.log("6. Contains");
	console.log("7. All Points");
	console.log("8. Exit");

	const option = prompt("Menu: ");
	MenuSwitch(option);
};

const CreateRange = () => {
	const rangeInput = prompt("Insert Range: ");

	try {
		const newRange = new Range(rangeInput);
		ranges.push(newRange);
		console.log("Range succesfully created.");
		pressAnyKeyToContinue();
		console.clear();
		ShowRanges();
	} catch (error) {
		console.error(error);
	}
};

const ShowRanges = () => {
	PrintRanges();
	pressAnyKeyToContinue();
};

const DeleteRange = () => {
	PrintRanges();

	const index = prompt("Index of range to delete: ");
	ranges.splice(index - 1, 1);
	console.log("Range succesfully deleted.");

	pressAnyKeyToContinue();

	console.clear();

	ShowRanges();
};

const RangeEquals = () => {
	PrintRanges();

	const index1 = prompt("Index of range #1 to check for Equality: ") - 1;
	const index2 = prompt("Index of range #2 to check for Equality: ") - 1;

	const Range1 = ranges[index1];
	const Range2 = ranges[index2];

	console.log(`Range 1: ${Range1.input}`);
	console.log(`Range 2: ${Range2.input}`);

	if (!Range1.equals(Range2)) {
		console.log(`Ranges aren't equal.`);
	} else {
		console.log(`Ranges are equal.`);
	}

	pressAnyKeyToContinue();
};

const RangeOverlaps = () => {
	PrintRanges();

	const index1 = prompt("Index of range #1 to check for Overlapping: ") - 1;
	const index2 = prompt("Index of range #2 to check for Overlapping: ") - 1;

	const Range1 = ranges[index1];
	const Range2 = ranges[index2];

	console.log(`Range 1: ${Range1.input}`);
	console.log(`Range 2: ${Range2.input}`);

	if (!Range1.overlaps(Range2)) {
		console.log(`Range 1 don't overlaps Range 2.`);
	} else {
		console.log(`Range 1 overlaps Range 2.`);
	}

	pressAnyKeyToContinue();
};

const RangeContains = () => {
	PrintRanges();

	const index1 = prompt("Index of range #1 to check for Contains: ") - 1;
	const index2 = prompt("Index of range #2 to check for Contains: ") - 1;

	const Range1 = ranges[index1];
	const Range2 = ranges[index2];

	console.log(`Range 1: ${Range1.input}`);
	console.log(`Range 2: ${Range2.input}`);

	if (!Range1.containsRange(Range2)) {
		console.log(`Range #1 don't contains Range 2.`);
	} else {
		console.log(`Range #1 contains Range 2.`);
	}

	pressAnyKeyToContinue();
};

const RangeAllPoints = () => {
	PrintRanges();

	const index1 = prompt("Select Range: ") - 1;

	const Range = ranges[index1];

	console.log(`Range points:`);
	console.log(Range.allPoints());
	pressAnyKeyToContinue();
};

let option;

do {
	console.clear();
	option = Menu();
	console.clear();
} while (option !== "8");
