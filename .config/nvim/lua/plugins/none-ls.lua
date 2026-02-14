return {
  "nvimtools/none-ls.nvim",
  config = function()
    local null_ls = require("null-ls")
    null_ls.setup({
      sources = {
        null_ls.builtins.formatting.clang_format,
        null_ls.builtins.formatting.stylua,
        -- null_ls.builtins.formatting.prettier,
        null_ls.builtins.formatting.isort,
--        null_ls.builtins.diagnostics.mypy,
        null_ls.builtins.formatting.black,

        -- Add HTML formatting and diagnostics
        null_ls.builtins.diagnostics.djlint,
        null_ls.builtins.formatting.djlint,
        -- Add CSS formatting and diagnostics
        null_ls.builtins.formatting.stylelint,
        null_ls.builtins.diagnostics.stylelint,

        null_ls.builtins.formatting.prettier

     },
    })

    vim.keymap.set("n", "<leader>gf", vim.lsp.buf.format, {})
  end,
}
