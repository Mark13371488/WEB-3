window.onload = async () => {
    let users = [];
	const usersTable = document.querySelector('#table');
	await getUsers().then(data => users = data);
    createTable(usersTable,users);

    async function getUsers() {
        const response = await fetch('/getusers');
        if (response.ok) {
            return await response.json();
        } else {
            console.log(response.status)
            return [];
        }
    }
}

function createTable(container, mas) {
    container.innerHTML = '';
    const table = document.createElement('table');
	//Голова таблиці
	const thead = document.createElement('thead');
	table.append(thead);
	const tr = document.createElement('tr');
	thead.append(tr);
	let h_des = Object.keys(mas[0]);
	for(let i=0; i<h_des.length; i++) {
		const th = document.createElement('th');
		th.innerHTML = h_des[i];
		tr.append(th);
	}
	//Тіло таблиці
    const tbody = document.createElement('tbody');
    table.append(tbody);
    container.append(table);
    for (let element of mas) {
        const tr = document.createElement('tr');
        tbody.append(tr);
        for(let key in element) {
            const td = document.createElement('td');
            td.innerHTML = element[key];
            tr.append(td);
        }
    }
}
