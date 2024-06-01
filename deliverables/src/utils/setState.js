// import { StarTrekApiService } from '../services/StarTrekApiServices.js';
import { StarWarsApiService } from '../services/StarWarsApiService.js';
import { data } from '../../data/data.js';
import { state } from '../../data/state.js';

export const getData = async () => {
    try {
        // const spaceCraftsPromise = StarTrekApiService('spacecraft', 1, 100);
        // const planetsPromise = StarTrekApiService('astronomicalObject', 1, 100);

        // const spaceCraftsPromise = StarWarsApiService('starships');
        const peoplePromise = StarWarsApiService('people');
        // const planetsPromise = StarWarsApiService('planets');

        const [
            // ships,
            // planets,
            people,
        ] = await Promise.all([
            // spaceCraftsPromise,
            // planetsPromise,
            peoplePromise,
        ]);

        data.items = people;
        state.itemsToRender = people;
        state.renderRequest.pagination.totalItems = people.length;
        state.renderRequest.pagination.totalPages =
            people.length / state.renderRequest.pagination.pageSize;
        console.log(data.items);
    } catch (error) {
        console.log(error);
    }
};
