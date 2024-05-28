import { data } from '../../../data/data.js';
import { state } from '../../../data/state.js';

export const filterItems = () => {
    state.renderRequest.filter.name =
        document.getElementById('input-name').value;
    state.renderRequest.filter.height =
        document.getElementById('input-height').value;
    state.renderRequest.filter.birthYear =
        document.getElementById('input-birthyear').value;

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
