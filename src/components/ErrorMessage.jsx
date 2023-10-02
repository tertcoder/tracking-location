function ErrorMessage({ children }) {
  return (
    <div style={{ color: "red", padding: "1rem", fontSize: "1.4rem" }}>
      {children}
    </div>
  );
}

export default ErrorMessage;
