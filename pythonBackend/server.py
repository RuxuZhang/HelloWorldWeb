import connexion

# Create the application instance
app = connexion.App(__name__, specification_dir='./')


app.add_api('times.yaml')

# If we're running in stand alone mode, run the application
if __name__ == '__main__':
    app.run(host='localhost', port=8080, debug=True)
