import React, { useContext } from 'react';
import { Button, Stack, TextField, useMediaQuery } from '@mui/material';
import { I18nContext } from '../../pages/_app';
import style from './ordination.module.css';
import { useForm } from 'react-hook-form';
import { sendContactForm } from '../../services/api';
import { z } from 'zod';

const schema = z.object({
  name: z.string().min(1, "please_enter_your_name"),
  email: z.string().email("invalid_email").min(1, "please_enter_your_email"),
  phone: z.string().min(1, "please_enter_your_phone_number"),
  message: z.string().min(1, "please_write_your_message"),
});

export default function Ordination() {
  const i18n = useContext(I18nContext);
  const mobile = useMediaQuery('(max-width: 786px)');

  const { register, handleSubmit, formState: { errors } } = useForm(
    {
      mode: "onChange",
      defaultValues: {
        name: "",
        email: "",
        phone: "",
        message: "",
      },
    }
  );
  const onSubmit = async (data:any) => {
    try {
      const validatedData = schema.parse(data);
      const res = await sendContactForm(validatedData);
      console.log(res.json());
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Stack className={style.header}>
        <h1 className={style.title}>{i18n.make_an_appointment}</h1>

      </Stack>
      <Stack direction={mobile?'column':'row'} spacing={5} className={style.container}>
        <Stack className={style.image}>
          <img src="/assets/ordination.jpg" alt=""/>
        </Stack>
        
        <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
        

          <TextField
            {...register("name")}
            id="name"
            name="name"
            label={i18n.name}
            variant="standard"
            fullWidth
            className={style.input}
            error={errors.name !== undefined}
            helperText={errors.name?.message && i18n[errors.name.message]}
            sx={{
              '& .MuiInput-root:before': {
                borderColor: 'var(--tertiary) !important',
              },
              '& .MuiInput-root:after': {
                borderColor: 'var(--primary) !important',
              },
              '& .MuiInputLabel-root.Mui-focused': {
                color: 'var(--primary)',
              },
            }}
          />

          <TextField
            {...register("email")}
            id="email"
            name="email"
            label={i18n.email}
            variant="standard"
            fullWidth
            className={style.input}
            error={errors.email !== undefined}
            helperText={errors.email?.message && i18n[errors.email.message]}
            sx={{
              '& .MuiInput-root:before': {
                borderColor: 'var(--tertiary) !important',
              },
              '& .MuiInput-root:after': {
                borderColor: 'var(--primary) !important',
              },
              '& .MuiInputLabel-root.Mui-focused': {
                color: 'var(--primary)',
              },
            }}
          />

          <TextField
            {...register("phone")}
            id="phone"
            name="phone"
            label={i18n.phone}
            variant="standard"
            fullWidth
            className={style.input}
            error={errors.phone !== undefined}
            helperText={errors.email?.message && i18n[errors.email.message]}
            sx={{
              '& .MuiInput-root:before': {
                borderColor: 'var(--tertiary) !important',
              },
              '& .MuiInput-root:after': {
                borderColor: 'var(--primary) !important',
              },
              '& .MuiInputLabel-root.Mui-focused': {
                color: 'var(--primary)',
              },
            }}
          />

          <TextField
            {...register("message")}
            id="message"
            name="message"
            label={i18n.message}
            placeholder={i18n.write_your_message_here}
            multiline
            rows={8}
            variant="standard"
            fullWidth
            className={style.input}
            error={errors.message !== undefined}
            helperText={errors.email?.message && i18n[errors.email.message]}
            sx={{
              '& .MuiInput-root:before': {
                borderColor: 'var(--tertiary) !important',
              },
              '& .MuiInput-root:after': {
                borderColor: 'var(--primary) !important',
              },
              '& .MuiInputLabel-root.Mui-focused': {
                color: 'var(--primary)',
              },
            }}
          />

          <Stack sx={{ marginLeft: 'auto' }}>
            <Button 
              type="submit"
              sx={{
                paddingX:"35px", 
                background:"var(--primary)", 
                color:"white", 
                "&:hover": {
                  background: "transparent",
                  color: "var(--primary)",
                },}}
            >
              {i18n.send}   
            </Button>
          </Stack>
          

        </form>
      </Stack>
    </>
  );
}
