import ComicsList from '../comicsList/ComicsList';
import AppBanner from '../appBanner/AppBanner';
import { Helmet } from 'react-helmet';

const ComicsPage = () => {
	return (
		<>
			<Helmet>
				<meta name={'description'} content={'Comics Marvel'} />
				<title>Marvel comics</title>
			</Helmet>
			<AppBanner />
			<ComicsList />
		</>
	);
};

export default ComicsPage;
