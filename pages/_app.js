import '../styles/globals.css';
import Layout from '../komponen/Layout'

function MyApp({ Component, pageProps }) {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}

export default MyApp;
