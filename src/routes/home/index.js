import { h } from 'preact';
import style from './style';
import { StyledComponent } from '../../components/styledComponent';

const Home = () => (
	<div class={style.home}>
		<h1>Home</h1>
		<p>This is the Home component.</p>
		<StyledComponent>This is the test component</StyledComponent>
	</div>
);

export default Home;
