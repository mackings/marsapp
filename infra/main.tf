provider "aws" {
  region = "us-east-1"

}

resource "aws_vpc" "dev_vpc" {
  cidr_block         = var.devcidr
  enable_dns_support = true

  tags = {
    Name = var.projectname
  }

}

resource "aws_internet_gateway" "dev_ig" {
  vpc_id = aws_vpc.dev_vpc.id
  tags = {
    Name = var.projectname
  }

}

resource "aws_subnet" "dev_subnet" {

  vpc_id                  = aws_vpc.dev_vpc.id
  cidr_block              = var.devcidr
  map_public_ip_on_launch = true
  tags = {
    Name = var.projectname
  }

}

resource "aws_route_table" "dev_routetable" {
  vpc_id = aws_vpc.dev_vpc.id
  tags = {
    Name = var.projectname
  }
}
resource "aws_route_table_association" "dev_routeass" {
  subnet_id      = aws_subnet.dev_subnet.id
  route_table_id = aws_route_table.dev_routetable.id

}