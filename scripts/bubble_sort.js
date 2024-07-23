function Bubble() {
    // Setting Time complexities
    document.getElementById("Time_Worst").innerText = "O(N^2)";
    document.getElementById("Time_Average").innerText = "Θ(N^2)";
    document.getElementById("Time_Best").innerText = "Ω(N)";

    // Setting Space complexity
    document.getElementById("Space_Worst").innerText = "O(1)";

    // Setting the Stability
    document.getElementById("Stability").innerText = "Stable";

    c_delay = 0;

    for (var i = 0; i < array_size - 1; i++) {
        var swapped = false;

        for (var j = 0; j < array_size - i - 1; j++) {
            div_update(divs[j], div_sizes[j], "yellow"); // Color update

            if (div_sizes[j] > div_sizes[j + 1]) {
                div_update(divs[j], div_sizes[j], "red"); // Color update
                div_update(divs[j + 1], div_sizes[j + 1], "red"); // Color update

                var temp = div_sizes[j];
                div_sizes[j] = div_sizes[j + 1];
                div_sizes[j + 1] = temp;

                div_update(divs[j], div_sizes[j], "red"); // Height update
                div_update(divs[j + 1], div_sizes[j + 1], "red"); // Height update

                swapped = true;
            }
            div_update(divs[j], div_sizes[j], "blue"); // Color update
        }
        div_update(divs[j], div_sizes[j], "green"); // Color update

        // If no two elements were swapped by inner loop, then break
        if (!swapped) break;
    }

    // Ensuring all elements are turned to green after sorting
    for (var k = 0; k < array_size; k++) {
        div_update(divs[k], div_sizes[k], "green");
    }

    enable_buttons();
}
