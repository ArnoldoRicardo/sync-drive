import typer
from pydrive2.auth import GoogleAuth
from pydrive2.drive import GoogleDrive

from spec import GDriveFileSystem

app = typer.Typer()

gauth = GoogleAuth()


@app.command()
def main(name: str):
    print(f"Hello {name}")
    gauth.LocalWebserverAuth()
    drive = GoogleDrive(gauth)  # Create GoogleDrive instance with authenticated GoogleAuth instance

    # Auto-iterate through all files in the root folder.
    file_list = drive.ListFile({'q': "'root' in parents and trashed=false"}).GetList()
    for file1 in file_list:
        print('title: %s, id: %s' % (file1['title'], file1['id']))
        __import__('ipdb').set_trace()
    fs = GDriveFileSystem(
        "root", google_auth=gauth
    )
    fs.ls('root')
    print("stop")


if __name__ == "__main__":
    app()
