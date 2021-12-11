import react from 'react'
import { Document, Page, Text, View, StyleSheet, Image, Font } from '@react-pdf/renderer'
import { Table, TableHeader, TableCell, TableBody, DataTableCell } from '@david.kucsai/react-pdf-table';


// Create Document Component
const MyDocument = ({
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
    nilaiRujukan}) => (
    <Document>
    <Page style={styles.body}>
        {/* header-wrapper */}
        <View style={styles.headerwrapper}>
            <Image
                style={styles.image}
                src="https://i.ibb.co/hHGgx3C/logo-pdf.png"
            />
            {/* header-wrapper-right */}
            <View style={styles.headerwrapperright}>
                {/* header-title */}
                <Text style={styles.headertitle}>Klinik Salam Sarma</Text>
                {/* headersubtitle */}
                <Text style={styles.headersubtitle}>Jl. Masjid Jamik No.29, Masjid Jamik, Kec. Rangkui,
                    Kota Pangkal Pinang, Kepulauan Bangka Belitung 33684</Text>
            </View>
        </View>
        <View style={styles.borderheader}></View>
        <View style={styles.informationwrapper}>
            <View style={styles.informationwrapperleft}>
                <View style={styles.informationcontent}>
                    <Text style={styles.informationtextshrink}>Nama</Text>
                    <Text style={styles.informationtext}>:</Text>
                    <Text style={styles.informationtext}>{nama}</Text>
                </View>
                <View style={styles.informationcontent}>
                    <Text style={styles.informationtextshrink}>Tanggal Lahir</Text>
                    <Text style={styles.informationtext}>:</Text>
                    <Text style={styles.informationtext}>{tanggalLahir}</Text>
                </View>
                <View style={styles.informationcontent}>
                    <Text style={styles.informationtextshrink}>Jenis Kelamin</Text>
                    <Text style={styles.informationtext}>:</Text>
                    <Text style={styles.informationtext}>{jenisKelamin}</Text>
                </View>
                <View style={styles.informationcontent}>
                    <Text style={styles.informationtextshrink}>Alamat</Text>
                    <Text style={styles.informationtext}>:</Text>
                    <Text style={styles.informationtext}>{alamat}</Text>
                </View>
            </View>
            <View style={styles.informationwrapperleft}>
                <View style={styles.informationcontent}>
                    <Text style={styles.informationtextshrink}>NIK</Text>
                    <Text style={styles.informationtext}>:</Text>
                    <Text style={styles.informationtext}>{nik}</Text>
                </View>
                <View style={styles.informationcontent}>
                    <Text style={styles.informationtextshrink}>Pemeriksa</Text>
                    <Text style={styles.informationtext}>:</Text>
                    <Text style={styles.informationtext}>{pemeriksa}</Text>
                </View>
                <View style={styles.informationcontent}>
                    <Text style={styles.informationtextshrink}>Tanggal Sampling</Text>
                    <Text style={styles.informationtext}>:</Text>
                    <Text style={styles.informationtext}>{tanggalSampling}</Text>
                </View>
                <View style={styles.informationcontent}>
                    <Text style={styles.informationtextshrink}>Tanggal Periksa</Text>
                    <Text style={styles.informationtext}>:</Text>
                    <Text style={styles.informationtextbold}>{tanggalPeriksa}</Text>
                </View>
            </View>
        </View>

        {/* TABLE */}
        {/* <Tabel /> */}
        <View style={styles.tablewrapper}>
            <Table data={[
                {
                    jenisPemeriksaan: jenisPemeriksaan, 
                    jenisSample: jenisSample, 
                    hasil: hasil, 
                    nilaiRujukan: nilaiRujukan, 
                }
            ]}>
                <TableHeader textAlign={"center"}>
                    <TableCell>
                        <Text style={styles.tabletextheader}>Jenis Pemeriksaan</Text>
                    </TableCell>
                    <TableCell>
                        <Text style={styles.tabletextheader}>Jenis Sample</Text>
                    </TableCell>
                    <TableCell weighting={0.6}>
                        <Text style={styles.tabletextheader}>Hasil</Text>
                    </TableCell>
                    <TableCell>
                        <Text style={styles.tabletextheader}>Nilai Rujukan</Text>
                    </TableCell>
                </TableHeader>
                <TableBody textAlign={'center'}>
                        <DataTableCell  getContent={(r) => <Text style={styles.tabletext}>{r.jenisPemeriksaan}</Text> }/>
                        <DataTableCell  getContent={(r) => <Text style={styles.tabletext}>{r.jenisSample}</Text> }/>
                        <DataTableCell weighting={0.6}  getContent={(r) => <Text style={styles.tabletext}>{r.hasil}</Text> }/>
                        <DataTableCell  getContent={(r) => <Text style={styles.tabletext}>{r.nilaiRujukan}</Text> }/>
                </TableBody>
            </Table>
        </View>

        <Text style={styles.notesheaders}>Note:</Text>
        <Text style={styles.notes}>Interpretasi dan Saran pada Antigen SARS-CoV-2 (Positif):</Text>
        <Text style={styles.notes}>- Pemeriksaan konfirmasi dengan pemeriksa RT-PCR</Text>
        <Text style={styles.notes}>- Lakukan karantina atau isolasi sesuai dengan kriteria</Text>
        <Text style={styles.notes}>- Menerapkan PHBS (Perilaku Hidup Bersih Sehat: Mencuci tangan, menerpakan etika batuk, menggunakan masker saat sakit, menjaga stamina) dan jaga jarak.</Text>
        <View style={styles.spacer}></View>
        <Text style={styles.notes}>Interpretasi dan Saran pada Antigen SARS-CoV-2 (Positif):</Text>
        <Text style={styles.notes}>Hasil negative tidak menyingkirkan kemungkinan terinfeksi SARS-CoV-2 sehingga masih beresiko menular ke orang lain, disarankan tes ulang</Text>
        <Text style={styles.notes}>Hasil negative dapat terjadi pada kondisi kuantitas antigen pada specimen di bawah level deteksi.</Text>
        <View style={styles.spacer}></View>
        <Text style={styles.notesheaders}>Demikian surat keterangan ini dibuat dengan sebenarnya untuk digunakan seperlunya.</Text>
        <View style={styles.spacer}></View>
        <View style={styles.spacer}></View>
        <View style={styles.spacer}></View>
        <View style={styles.floatright}>
            <Text style={styles.date}>Bangka Belitung, 10 Desember 2021</Text>
        </View>
    </Page>
  </Document>
  );



  Font.register({
    family: 'Oswald',
    src: 'https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf'
   
  });


  const styles = StyleSheet.create({
    body: {
      paddingTop: 35,
      paddingBottom: 65,
      paddingHorizontal: 35,
    },
    headerwrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 'auto',
    },
    headerwrapperright: {
      paddingLeft: 30,
    },
    borderheader: {
        border: '1px solid rgb(216, 214, 214)',
        marginTop: 10
    },
    headertitle: {
      fontSize: 20,
      textAlign: 'center',
      fontFamily: 'Oswald',
      fontWeight: 'bold'
    },
    headersubtitle: {
      fontSize: 14,
      textAlign: 'left',
      fontFamily: 'Oswald',
      width: 300,
      fontWeight: 400
    },
    image: {
        width: 150
    },
    informationwrapper: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 40
    },
    informationwrapperleft: {
        flexDirection: 'column',
        // flexBasis: 300,
    },
    informationcontent: {
        flexDirection: 'row',
        marginBottom: 5
    },
    informationtext: {
        fontFamily: 'Oswald',
        fontSize: 14,
        marginRight: 10
    },
    informationtextshrink: {
        fontFamily: 'Oswald',
        fontSize: 14,
        flexBasis: 100
    },
    informationtextbold: {
        fontFamily: 'Oswald',
        fontSize: 14,
        fontWeight: 'bold'
    },
    tablewrapper: {
        marginBottom: 40
    },
    tabletextheader: {
        fontFamily: 'Oswald',
        fontSize: 14,
        fontWeight: 'bold',
        paddingVertical: 5,
    },
    tabletext: {
        fontFamily: 'Times-Roman',
        fontSize: 14,
        paddingVertical: 5
    },
    notesheaders: {
        fontFamily: 'Oswald',
        fontSize: 14,
    },
    date: {
        fontFamily: 'Oswald',
        fontSize: 14,
    },
    notes: {
        fontFamily: 'Oswald',
        fontSize: 12,
        marginBottom:5
    },
    spacer: {
        marginVertical: 5
    },
    floatright: {
        alignItems:'flex-end'
    },
  });

  export default MyDocument;
