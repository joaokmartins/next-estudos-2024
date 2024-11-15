"use client";

import { useState } from 'react';

type SearchForm = {
		NewFilter:string[];
};

export default function Home() {
	const [saveFilter] = useState<SearchForm> ([
		FilterCategory:['Categoria A', 'Categoria B', 'Categoria C'];
	]);
	
	const [initialFilter, setInitialFilter] = useState<SearchForm> ({
		NewFilter:[''];
	});
	
	const FilterResult = useState<SearchForm> ({		
		setInitialFilter[[]]
	)
}
;	
	const toggleFilter = FilterResult(prev + NewFilter);

	const applyFilters =  ({
		FilterCategory
	})

	return (
<div>
		<button onClick={applyFiters}>Categoria A</button>
		<button onClick={applyFiters}>Categoria B</button>
		<button onClick={applyFiters}>Categoria C</button>
		</div>
	)
}



