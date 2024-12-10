export interface IDataUtama {
  id_aju: string;
  nomor_pengajuan: string;
  tanggal_pengajuan: string;
  nomor_pendaftaran: string | null;
  tanggal_pendaftaran: string | null;
  ur_pabean_asal: string;
  kd_skep_fasilitas: string;
  jenis_pib: string;
  kd_jenis_impor: string;
  ur_cara_bayar: string;
  ur_transaksi_impor: string;
}
