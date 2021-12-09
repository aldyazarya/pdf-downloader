import logo from './logo.svg';
import './App.css';
import { PDFViewer, PDFDownloadLink, Text, StyleSheet  } from '@react-pdf/renderer'

import MyDocument from './pdf/pdf'

const styles = StyleSheet.create({
  links: {
    color: 'white',
    textDecoration: 'none',
    fontSize: 20,
    fontWeight: 'bold'
  }
})

function App() {
  return (
    <div className='App'>
      <h1>Button Download for Pdf</h1>
      <button style={{padding: '16px 32px', border: 'none', borderRadius: 5, background:'#0F233B'}}>
        <PDFDownloadLink style={styles.links} document={<MyDocument />} fileName='svcovid.pdf'>
          {({ blob, url, loading, error }) => (loading ? 'Loading document...'  : 'Download Pdf')}
        </PDFDownloadLink>
      </button>

    </div>
  );
}

export default App;
