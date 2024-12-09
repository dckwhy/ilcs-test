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

import { Search } from "lucide-react";

const FormSchema = z.object({
  nomor_pengajuan: z.string(),
});

const DataEntitas = () => {
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
            name="jenis_pemberitahuan"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Jenis Pemberitahuan <span className="text-red-500">*</span>
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
        <hr />
        <div>
          <p className="text-xl">Pengusaha</p>
          <hr className="w-8 border-t-4 border-blue-400 my-2" />
        </div>
        <div className="grid grid-cols-3 gap-4">
          <FormField
            control={form.control}
            name="jenis_identitas"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Jenis Pemberitahuan <span className="text-red-500">*</span>
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
            name="nib"
            render={() => (
              <FormItem>
                <FormLabel>
                  NIB <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Input readOnly />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="nomor_identitas"
            render={() => (
              <FormItem>
                <FormLabel>
                  No Identitas <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input readOnly className="pr-10" />
                    {/* Button Icon */}
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 flex items-center px-3 text-white bg-blue-500 hover:text-blue-700 rounded-r-md"
                    >
                      <Search className="w-5 h-5" />
                    </button>
                  </div>
                </FormControl>
              </FormItem>
            )}
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="nomor_idedntitas_16_digit"
            render={() => (
              <FormItem>
                <FormLabel>No Identitas(16 digit)</FormLabel>
                <FormControl>
                  <Input readOnly />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="nama_perusahaan"
            render={() => (
              <FormItem>
                <FormLabel>
                  Nama Perusahaan <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Input readOnly />
                </FormControl>
              </FormItem>
            )}
          />
        </div>
        <div className="grid grid-cols-5 gap-4">
          <FormField
            control={form.control}
            name="provinsi"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Provinsi <span className="text-red-500">*</span>
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
            name="kota"
            render={() => (
              <FormItem>
                <FormLabel>
                  Kota / Kabupaten <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Input readOnly />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="kecamatan"
            render={() => (
              <FormItem>
                <FormLabel>
                  Kecamatan <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Input readOnly />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="kode_pos"
            render={() => (
              <FormItem>
                <FormLabel>
                  Kode Pos <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Input readOnly />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="rt_rw"
            render={() => (
              <FormItem>
                <FormLabel>
                  RT / RW <span className="text-red-500">*</span>
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
            name="telepon"
            render={() => (
              <FormItem>
                <FormLabel>
                  Telepon <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Input readOnly />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={() => (
              <FormItem>
                <FormLabel>
                  Email <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Input readOnly />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="status"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Status <span className="text-red-500">*</span>
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

export default DataEntitas;
