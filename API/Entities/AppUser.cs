namespace API.Entities;

public class AppUser
{

    public int Id { get; set; }
    public required string UserName { get; set; }  //можно и так убрать ошибку (стринг нуллабл) public string UserName { get; set; } ="";
    public required byte[] PasswordHash { get; set; }
    public required byte[] PasswordSalt { get; set; }



}