import { Container } from "./styles";

export function Button({ title, loading = false, icon: Icon, ...rest }) {
  return (
    <>
      <Container type="button" disabled={loading} {...rest}>
        {Icon && <Icon size={20} />}{" "}
        {/* Se existe ícone, mostrará o ícone. Se não, nada */}
        {loading ? "Carregando" : title}
      </Container>
    </>
  );
}
