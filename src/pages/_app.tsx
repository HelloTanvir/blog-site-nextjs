import { ThemeProvider } from 'next-themes';
import Layout from '../components/Layout';
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
    return (
        <ThemeProvider enableSystem attribute="class">
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </ThemeProvider>
    );
}
