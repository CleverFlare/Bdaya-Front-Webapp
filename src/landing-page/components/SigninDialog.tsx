import {
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Link,
  Modal,
  ModalDialog,
  Stack,
  Typography,
} from "@mui/joy";
import { Form, Formik } from "formik";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Link as RouterLink } from "react-router-dom";
import { REGISTER } from "../../routesPaths";
import { signinSchema } from "../../schemas/signinSchema";
interface ISigninDialogProps {
  open: boolean;
  onClose: () => void;
}

export const SigninDialog: FC<ISigninDialogProps> = (props) => {
  const { t } = useTranslation();

  function handleSubmit(values: { code: string; password: string }) {
    console.log(values);
  }

  return (
    <Modal open={props.open} onClose={props.onClose}>
      <ModalDialog
        sx={{
          maxWidth: 400,
          width: "100%",
          borderRadius: "md",
          p: 3,
          boxShadow: "lg",
        }}
      >
        <Typography
          component="h2"
          level="inherit"
          mb="0.25em"
          fontWeight="bold"
        >
          {t("components.signin_modal.title")}
        </Typography>
        <Typography mt={0.5} mb={2} textColor="text.tertiary">
          {t("components.signin_modal.desc")}
        </Typography>
        <Formik
          initialValues={{
            code: "",
            password: "",
          }}
          validationSchema={signinSchema}
          onSubmit={handleSubmit}
        >
          {(formik) => {
            const { errors, values, setFieldValue, handleBlur } = formik;

            return (
              <Form>
                <Stack spacing={2}>
                  <FormControl error={Boolean(errors.code)}>
                    <FormLabel>{t("components.signin_modal.code")}</FormLabel>
                    <Input
                      required
                      value={values.code}
                      onChange={(e) => setFieldValue("code", e.target.value)}
                      onBlur={handleBlur}
                    />
                    <FormHelperText>{t(errors.code || "")}</FormHelperText>
                  </FormControl>
                  <FormControl error={Boolean(errors.password)}>
                    <FormLabel>{t("components.signin_modal.pass")}</FormLabel>
                    <Input
                      required
                      value={values.password}
                      onChange={(e) =>
                        setFieldValue("password", e.target.value)
                      }
                      onBlur={handleBlur}
                    />
                    <FormHelperText>{t(errors.password || "")}</FormHelperText>
                  </FormControl>
                  <Link
                    component={RouterLink}
                    to={REGISTER}
                    onClick={() => props.onClose()}
                  >
                    {t("components.signin_modal.enroll")}
                  </Link>
                  <Button type="submit">
                    {t("components.signin_modal.submit")}
                  </Button>
                </Stack>
              </Form>
            );
          }}
        </Formik>
      </ModalDialog>
    </Modal>
  );
};
