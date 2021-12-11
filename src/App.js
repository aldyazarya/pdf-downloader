import react, { Component } from 'react'
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


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        nama: 'Aldy Azarya',
        tanggalLahir: '1994-12-16',
        jenisKelamin: 'Laki-laki',
        alamat: 'Bendungan Hilir',
        nik: '123456789876787',
        pemeriksa: 'lorem ipsum',
        tanggalSampling: '0000-00-00',
        tanggalPeriksa: '0000-00-00',
        jenisPemeriksaan: 'lorem ipsum',
        jenisSample: 'lorem ipsum',
        hasil: 'negative',
        nilaiRujukan: 'lorem ipsum',
    }
  }


  render(){
    const {
      nama, 
      tanggalLahir, 
      jenisKelamin, 
      alamat, 
      nik, 
      pemeriksa,
      tanggalSampling, 
      tanggalPeriksa,
      jenisPemeriksaan,
      jenisSample,
      hasil,
      nilaiRujukan
    } = this.state


    return (
      <div className='App'>
        <h1>Button Download for Pdf</h1>
        <button style={{padding: '16px 32px', border: 'none', borderRadius: 5, background:'#0F233B'}}>
          <PDFDownloadLink 
            style={styles.links} 
            document={<MyDocument 
                        nama={nama}
                        tanggalLahir={tanggalLahir}
                        jenisKelamin={jenisKelamin}
                        alamat={alamat}
                        nik={nik}
                        pemeriksa={pemeriksa}
                        tanggalSampling={tanggalSampling}
                        tanggalPeriksa={tanggalPeriksa} 
                        jenisPemeriksaan={jenisPemeriksaan}
                        jenisSample={jenisSample}
                        hasil={hasil}
                        nilaiRujukan={nilaiRujukan}
                      />
                      }
            fileName='svcovid.pdf'
          >
            {({ blob, url, loading, error }) => (loading ? 'Loading document...'  : 'Download Pdf')}
          </PDFDownloadLink>
        </button>
      </div>
    );
  }

}

export default App;
