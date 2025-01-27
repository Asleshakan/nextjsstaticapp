import azure.functions as func

app = func.FunctionApp(http_auth_level=func.AuthLevel.ANONYMOUS)

@app.function_name("test_func")
@app.route(route="testfunc", methods=["GET", "OPTIONS"])
def test_func(req: func.HttpRequest) -> func.HttpResponse:
    if req.method == "OPTIONS":
        headers = {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type"
        }
        return func.HttpResponse(status_code=204, headers=headers)

    name = req.params.get("name")
    if name:
        return func.HttpResponse(
            f"Hello, {name}. This HTTP triggered function executed successfully.",
            headers={"Access-Control-Allow-Origin": "*"}
        )
    else:
        return func.HttpResponse(
            "This HTTP triggered function executed successfully. Pass a name in the query string for a personalized response.",
            status_code=200,
            headers={"Access-Control-Allow-Origin": "*"}
        )
