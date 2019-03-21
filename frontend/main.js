document.addEventListener('DOMContentLoaded', function () {

	// declarations
	///////////////
	const baseApiUrl = 'http://localhost:4000';
	const counterNode = document.querySelector('.counter');

    const mainNode = document.querySelector('main');

	// value counter
	const updateCounterDOM = (value) => {
		counterNode.innerText = String(value)
	}

	// bg color counter
	const updateCounterBgColor = (value) => {

		document.querySelector('main').style.backgroundColor = String(value);
		// initial value picker
		document.querySelector('.picker').value = String(value);

	}

	// get initial value from backend
	fetch(baseApiUrl + '/data')
		.then(response => response.json())
		.then(data => {
			updateCounterDOM(data.counterValue);
			updateCounterBgColor(data.color);
		})

	// Listeners
	////////////

	// listener for increment
	document.querySelector('header .increment').addEventListener('click', () => {
		// increment counter


		fetch(baseApiUrl + '/increment')
			.then(res => res.json())
			.then(data => {
				updateCounterDOM(data.counterValue)
			})

	})

	// listener for increment by
	document.querySelector('header .incrementBy').addEventListener('keyup', (ev) => {

		if (ev.keyCode === 13) {
			let amount = ev.target.value;

			fetch(baseApiUrl + '/incrementBy/' + amount)
				.then(res => res.json())
				.then(data => {
					updateCounterDOM(data.counterValue)
					ev.target.value = '';
				})
				.catch(console.error)


		}
	})

	// listener for decrement
	// INFO: querySelector tomará el primer elemento que encuentre
	document.querySelector('header .decrement').addEventListener('click', () => {
		// decrement counter

		fetch(baseApiUrl + '/decrement')
			.then(res => res.json())
			.then(data => {
				updateCounterDOM(data.counterValue)
			})

	})

	// listener for decrement by
	document.querySelector('header .decrementBy').addEventListener('keyup', (ev) => {

		if (ev.keyCode === 13) {
			let amount = ev.target.value;

			fetch(baseApiUrl + '/decrementBy/' + amount)
				.then(res => res.json())
				.then(data => {
					updateCounterDOM(data.counterValue)
					ev.target.value = '';
				})
				.catch(console.error)


		}
	})

	// listener for reset
	document.querySelector('header .reset').addEventListener('click', () => {
		// reset counter
		fetch(baseApiUrl + '/reset')
			.then(res => res.json())
			.then(data => {
				updateCounterDOM(data.counterValue)

				// TODO RESET color
				//data.color === "grey";
				updateCounterBgColor(data.color)
			})

    })
			
		// listener for color
		// const color = document.querySelector('.bg-color');
		document.querySelector('.picker').addEventListener("change", function (ev) {

				let bgColor = ev.target.value;
				
				let endpoint = baseApiUrl + '/color/' + encodeURIComponent(bgColor);
		    console.log(endpoint);

				fetch(endpoint)
					.then(res => res.json())
					.then(data => {
						updateCounterBgColor(data.color)
						// TODO
						ev.target.value = bgColor;
						//bgColor = '';

					})
					.catch(console.error)
	
	


	}, false);


})
