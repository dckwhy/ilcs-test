export interface IEntitas {
  ur_entitas_pemberitahu: string;
  pengusaha: {
    ur_jenis_identitas: string | null;
    nib: string;
    nomor_identitas: string;
    nomor_identitas_16: string | null;
    nama_identitas: string;
    provinsi_identitas: string;
    kota_identitas: string;
    kecamatan: string;
    kode_pos: string;
    rt_rw: string;
    tlp_identitas: string;
    email_identitas: string;
    status: string;
  };
}
