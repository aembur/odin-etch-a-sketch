const res_slider = document.querySelector("#grid-size")
const res_slider_value = document.querySelector(".slidecontainer > #small")
const grid_container = document.querySelector("#grid")

res_slider.value = 16;
on_grid_value_changed(res_slider.value);

res_slider.addEventListener("input", function() {
	on_grid_value_changed(res_slider.value);
});

document.querySelector("#clear").addEventListener("click", function() {
	on_grid_value_changed(res_slider.value);
})


function on_grid_value_changed(new_value) {
	res_slider_value.textContent = new_value;
	create_grid(new_value);
}


function create_grid(grid_size) {
	grid_container.innerHTML = "";

	for (let i = 0; i < grid_size; i++) {
		let row = document.createElement("div")
		row.className = "row"
		grid_container.appendChild(row)
		for (let j = 0; j < grid_size; j++) {
			let cell = document.createElement("div")
			cell.className = "cell"
			row.appendChild(cell)

			cell.addEventListener("mouseenter", (event) => {
				event.target.style.backgroundColor = "#44475A"
			})
		}
	}
}