﻿using Microsoft.AspNetCore.Mvc;

public class UsersController : Controller
{
    public IActionResult Index()
    {
        return View(); // ✅ This will load "Views/Users/Index.cshtml"
    }
}
