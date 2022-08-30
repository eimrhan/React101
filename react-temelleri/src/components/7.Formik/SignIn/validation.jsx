import * as yup from 'yup';

const SignInValidation = yup.object().shape({
    // initialValues içinde kullandığın keyleri kullanacaksın
    email: yup.string().email("Geçerli bir mail giriniz").required("Email zorunlu"),
    // girilen değer e mail değilse form submit olmaz
    password: yup.string().min(5, "Şifre en az 5 karakter olmalı").required("Şifre zorunlu"),
    // pw min. 5 karakter olma şartı ekledik
    password2: yup.string().oneOf([yup.ref("password")], "Şifreler uyuşmuyor").required("Şifre onayı zorunlu")
    // girilen pw'lerin birbirine eşit olma durumu kontrol ediliyor

    // hata mesajlarını elle girmezsen kendi default mesajlarını yazar.
})

export default SignInValidation;

/* yup eklentisi tüm bu kontrolleri kendi içerisinde sağlıyor.
    böyle bir araç kullanmak istemezsen el ile kontrol de eklenebilir: */
//? https://formik.org/docs/guides/validation 