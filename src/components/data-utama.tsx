"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const FormSchema = z.object({
  nomor_pengajuan: z.string(),
});

const DataUtama = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      nomor_pengajuan: "",
    },
  });

  return (
    <Form {...form}>
      <form className="w-full space-y-6">
        <div className="grid grid-cols-4 gap-4">
          <FormField
            control={form.control}
            name="nomor_pengajuan"
            render={() => (
              <FormItem>
                <FormLabel>Nomor Pengajuan</FormLabel>
                <FormControl>
                  <Input readOnly />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="tanggal_pengajuan"
            render={() => (
              <FormItem>
                <FormLabel>Tanggal Pengajuan</FormLabel>
                <FormControl>
                  <Input readOnly />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="nomor_pendaftaran"
            render={() => (
              <FormItem>
                <FormLabel>Nomor Pendaftaran</FormLabel>
                <FormControl>
                  <Input readOnly />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="tanggal_pendaftaran"
            render={() => (
              <FormItem>
                <FormLabel>Tanggal Pendaftaran</FormLabel>
                <FormControl>
                  <Input readOnly />
                </FormControl>
              </FormItem>
            )}
          />
        </div>
        <div className="grid grid-cols-3 gap-4">
          <FormField
            control={form.control}
            name="kantor_pabean"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Kantor Pabean <span className="text-red-500">*</span>
                </FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a verified email to display" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="m@example.com">m@example.com</SelectItem>
                    <SelectItem value="m@google.com">m@google.com</SelectItem>
                    <SelectItem value="m@support.com">m@support.com</SelectItem>
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="skep_fasilitas"
            render={() => (
              <FormItem>
                <FormLabel>SKEP Fasilitas</FormLabel>
                <FormControl>
                  <Input readOnly />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="jenis_pib"
            render={() => (
              <FormItem>
                <FormLabel>
                  Jenis PIB <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Input readOnly />
                </FormControl>
              </FormItem>
            )}
          />
        </div>
        <div className="grid grid-cols-3 gap-4">
          <FormField
            control={form.control}
            name="jenis_impor"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Jenis Impor <span className="text-red-500">*</span>
                </FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a verified email to display" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="m@example.com">m@example.com</SelectItem>
                    <SelectItem value="m@google.com">m@google.com</SelectItem>
                    <SelectItem value="m@support.com">m@support.com</SelectItem>
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="kantor_pabean"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Cara Pembayaran <span className="text-red-500">*</span>
                </FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a verified email to display" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="m@example.com">m@example.com</SelectItem>
                    <SelectItem value="m@google.com">m@google.com</SelectItem>
                    <SelectItem value="m@support.com">m@support.com</SelectItem>
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="transaksi"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Transaksi <span className="text-red-500">*</span>
                </FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a verified email to display" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="m@example.com">m@example.com</SelectItem>
                    <SelectItem value="m@google.com">m@google.com</SelectItem>
                    <SelectItem value="m@support.com">m@support.com</SelectItem>
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />
        </div>
      </form>
    </Form>
  );
};

export default DataUtama;
