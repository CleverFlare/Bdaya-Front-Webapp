import {
  Box,
  Button,
  Container,
  FormControl,
  FormHelperText,
  FormLabel,
  Grid,
  IconButton,
  Input,
  Option,
  Select,
  Sheet,
  Stack,
  Typography,
} from "@mui/joy";
import Lottie from "lottie-react";
import registeringAnimation from "../../lotties/registration.json";
import { FC, useState } from "react";
import { Form, Formik } from "formik";
import { useTranslation } from "react-i18next";
import { registerSchema } from "../../schemas/registerSchema";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { Track } from "../../slices/tracks";
import { NumericFormat } from "react-number-format";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { formatNum } from "../../utils";

interface IEnrollProps {}

export const Enroll: FC<IEnrollProps> = (props) => {
  const tracks = useSelector((state: RootState) => state.tracks.value);

  const { t } = useTranslation();

  function handleSubmit(values: unknown) {}
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        paddingBlock: 5,
      }}
    >
      <Sheet
        variant="outlined"
        sx={{
          borderRadius: 15,
          overflow: "hidden",
          width: "100%",
        }}
      >
        <Grid container sx={{ height: "100%" }}>
          <Grid
            xl={6}
            lg={6}
            md={6}
            sm={6}
            xs={0}
            sx={{ bgcolor: "primary.500" }}
          >
            <Box
              component={Lottie}
              animationData={registeringAnimation}
              loop
              sx={{ height: "100%", width: "100%" }}
            ></Box>
          </Grid>
          <Grid
            xl={6}
            lg={6}
            md={6}
            sm={6}
            xs={12}
            sx={{
              padding: 5,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: 2,
            }}
          >
            <Typography level="h3" fontWeight="bold">
              {t("landing-page.enroll-page.title")}
            </Typography>
            <Typography level="body1" textColor="neutral.500">
              {t("landing-page.enroll-page.desc")}
            </Typography>
            <Formik
              initialValues={{
                firstName: "",
                lastName: "",
                email: "",
                code: "",
                phone: "",
                altPhone: "",
                password: "",
                track: "",
              }}
              onSubmit={handleSubmit}
              validationSchema={registerSchema}
            >
              {(formik) => {
                const { values, errors, setFieldValue, handleBlur } = formik;
                return (
                  <Form>
                    <Stack spacing={2}>
                      <Stack direction="row" gap={2} flexWrap="wrap">
                        <TextField
                          label={t("landing-page.enroll-page.firstName")}
                          value={values.firstName}
                          error={errors.firstName}
                          helperText={t(errors.firstName || "")}
                          onChange={(e: Event) =>
                            setFieldValue(
                              "firstName",
                              (e.target as HTMLInputElement).value
                            )
                          }
                          onBlur={handleBlur}
                          required
                        />
                        <TextField
                          label={t("landing-page.enroll-page.lastName")}
                          value={values.lastName}
                          error={errors.lastName}
                          helperText={t(errors.lastName || "")}
                          onChange={(e: Event) =>
                            setFieldValue(
                              "lastName",
                              (e.target as HTMLInputElement).value
                            )
                          }
                          onBlur={handleBlur}
                          required
                        />
                      </Stack>
                      <Stack direction="row" gap={2} flexWrap="wrap">
                        <TextField
                          type="email"
                          label={t("landing-page.enroll-page.email")}
                          value={values.email}
                          error={errors.email}
                          helperText={t(errors.email || "")}
                          onChange={(e: Event) =>
                            setFieldValue(
                              "email",
                              (e.target as HTMLInputElement).value
                            )
                          }
                          onBlur={handleBlur}
                          required
                        />
                        <TextField
                          label={t("landing-page.enroll-page.code")}
                          value={values.code}
                          error={errors.code}
                          helperText={t(errors.code || "")}
                          onChange={(e: Event) =>
                            setFieldValue(
                              "code",
                              (e.target as HTMLInputElement).value
                            )
                          }
                          onBlur={handleBlur}
                        />
                      </Stack>
                      <Stack direction="row" gap={2} flexWrap="wrap">
                        <TextField
                          label={t("landing-page.enroll-page.phone")}
                          value={values.phone}
                          error={errors.phone}
                          helperText={t(errors.phone || "")}
                          onChange={(e: Event) =>
                            setFieldValue(
                              "phone",
                              formatNum((e.target as HTMLInputElement).value)
                            )
                          }
                          onBlur={handleBlur}
                          required
                        />
                        <TextField
                          label={t("landing-page.enroll-page.altPhone")}
                          value={values.altPhone}
                          error={errors.altPhone}
                          helperText={t(errors.altPhone || "")}
                          onChange={(e: Event) =>
                            setFieldValue(
                              "altPhone",
                              formatNum((e.target as HTMLInputElement).value)
                            )
                          }
                          onBlur={handleBlur}
                        />
                      </Stack>
                      <Stack direction="row" gap={2} flexWrap="wrap">
                        <PasswordField
                          label={t("landing-page.enroll-page.password")}
                          value={values.password}
                          error={errors.password}
                          helperText={t(errors.password || "")}
                          onChange={(e: Event) =>
                            setFieldValue(
                              "password",
                              (e.target as HTMLInputElement).value
                            )
                          }
                          onBlur={handleBlur}
                          required
                        />
                        <SelectField
                          label={t("landing-page.enroll-page.track")}
                          value={values.track}
                          error={errors.track}
                          helperText={t(errors.track || "")}
                          onChange={(e: Event, newValue: string) =>
                            setFieldValue("track", newValue)
                          }
                          onBlur={handleBlur}
                          required
                        >
                          {tracks.map((track: Track) => (
                            <Option value={track.id}>{track.name}</Option>
                          ))}
                        </SelectField>
                      </Stack>
                      <Button type="submit">
                        {t("landing-page.enroll-page.submit")}
                      </Button>
                    </Stack>
                  </Form>
                );
              }}
            </Formik>
          </Grid>
        </Grid>
      </Sheet>
    </Container>
  );
};

interface ITextFieldProps {
  label: any;
  error?: any;
  required?: any;
  helperText?: any;
  [key: string]: any;
}

export const TextField: FC<ITextFieldProps> = ({
  label,
  helperText,
  error,
  required,
  ...props
}) => {
  return (
    <FormControl sx={{ flex: 1 }} error={error} required={required}>
      <FormLabel>{label}</FormLabel>
      <Input {...props} />
      {Boolean(helperText) && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
};

interface IPasswordFieldProps {
  label: any;
  error?: any;
  required?: any;
  helperText?: any;
  [key: string]: any;
}

export const PasswordField: FC<IPasswordFieldProps> = ({
  label,
  helperText,
  error,
  required,
  ...props
}) => {
  const [visible, setVisible] = useState<boolean>(false);

  function handleToggleVisibility() {
    setVisible((old) => !old);
  }

  return (
    <FormControl sx={{ flex: 1 }} error={error} required={required}>
      <FormLabel>{label}</FormLabel>
      <Input
        {...props}
        type={visible ? "text" : "password"}
        endDecorator={
          <IconButton color="neutral" onClick={handleToggleVisibility}>
            {visible ? <VisibilityOffIcon /> : <VisibilityIcon />}
          </IconButton>
        }
      />
      {Boolean(helperText) && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
};

interface ISelectFieldProps {
  label: any;
  error?: any;
  required?: any;
  helperText?: any;
  children?: any;
  [key: string]: any;
}

export const SelectField: FC<ISelectFieldProps> = ({
  label,
  helperText,
  error,
  required,
  children,
  ...props
}) => {
  return (
    <FormControl
      sx={{
        flex: 1,
        "& .JoySelect-listbox": {
          maxHeight: 150,
          overflowY: "auto",
        },
      }}
      error={error}
      required={required}
    >
      <FormLabel>{label}</FormLabel>
      <Select {...props}>{children}</Select>
      {Boolean(helperText) && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
};
