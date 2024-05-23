import { StarTrekApiService } from '../services/StarTrekApiServices.js';
import { StarWarsApiService } from '../services/StarWarsApiService.js';

export const renderPageBase = async () => {
    const root = document.createElement('div');
    root.classList = 'root';
    root.id = 'root';

    try {
        // const spaceCraftsPromise = StarTrekApiService('spacecraft', 1, 100);
        // const planetsPromise = StarTrekApiService('astronomicalObject', 1, 100);

        const spaceCraftsPromise = StarWarsApiService('starships');
        const peoplePromise = StarWarsApiService('people');
        const planetsPromise = StarWarsApiService('planets');

        const [ships, planets, people] = await Promise.all([
            spaceCraftsPromise,
            planetsPromise,
            peoplePromise,
        ]);

        console.log(ships, planets, people);
    } catch {}

    document.body.appendChild(root);
};
