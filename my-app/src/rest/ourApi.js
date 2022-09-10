const FOOD_ENDPOINT = 'https://631cc75f4fa7d3264cb6a486.mockapi.io/Week_15_Homework_API/Food';

class FoodApi {
    get = async () => {
        try{
        const resp = await fetch (FOOD_ENDPOINT)
        const data = await resp.json();
        return data;
        }catch(e){
            console.log('Oops, looks like we had an issues',e);
        }
        
    }

    put = async(food) => {
        try{
            const resp = await fetch(`${FOOD_ENDPOINT}/${food._id}`,{
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(food)
            });
            return await resp.json();
        } catch (e){
            console.log('Oops, looks like we had an issues with updating food',e);
        }
        
    }
}

export const foodApi = new FoodApi();