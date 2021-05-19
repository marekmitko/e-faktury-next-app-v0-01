
import {MDCTopAppBar} from '@material/top-app-bar';

const topAppBarElement = document.querySelector('.mdc-top-app-bar');
const topAppBar = new MDCTopAppBar(topAppBarElement);

export default function RenderUserDashboard () {
    return(
    <>
        <topAppBar></topAppBar>
        <h1>Pulpit nawigacyjny</h1>
    </>
    )
}