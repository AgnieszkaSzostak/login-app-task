export const fields = [
    {
        label: "email",
        name: "email",
        type: "email",
        required: true,
        pattern: '^[0-9a-zA-Z_.-]+@[0-9a-zA-Z.-]+\.[a-zA-Z]{2,3}$',
        error: "Wrong email format",
        placeholder: "email"
    },
    {
        label: "login",
        name: "userName",
        type: "text",
        required: true,
        error: "Wrong login format",
        placeholder: "login"
    },
    {
        label: "password",
        name: "password",
        type: "password",
        required: true,
        placeholder: "password"
    }
]