

export async function apiCallFunc(selectedOption, inputValue) {
    if( typeof inputValue === 'string' || typeof inputValue === 'object') {
        const url = `https://book-finder1.p.rapidapi.com/api/search?series=${inputValue}&lexile_min=600&lexile_max=800&results_per_page=25&page=1`;
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '1b70be26e3mshdec4e21bd6b3c62p19a69fjsn7b7f5b82dd88',
                'X-RapidAPI-Host': 'book-finder1.p.rapidapi.com'
            }
        };
        
        try {
            const response = await fetch(url, options);
            const result = await response.text();
            return result;
        } catch (error) {
            console.error(error);
        }
    }
  }