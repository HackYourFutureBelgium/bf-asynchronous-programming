import { data } from '../../../data/data.js';
import { state } from '../../../data/state.js';

export const filterItems = () => {
    let tempList = data.items;

    if (state.renderRequest.filter.name != '') {
        tempList = tempList.filter((x) =>
            String(x.name)
                .toLowerCase()
                .includes(
                    String(state.renderRequest.filter.name).toLowerCase(),
                ),
        );
    }
    if (state.renderRequest.filter.height != '') {
        tempList = tempList.filter((x) =>
            String(x.height)
                .toLowerCase()
                .includes(
                    String(state.renderRequest.filter.height).toLowerCase(),
                ),
        );
    }
    if (state.renderRequest.filter.birthYear != '') {
        tempList = tempList.filter((x) =>
            String(x.birth_year)
                .toLowerCase()
                .includes(
                    String(state.renderRequest.filter.birthYear).toLowerCase(),
                ),
        );
    }

    state.itemsToRender = tempList;
};